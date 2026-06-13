import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, signal } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { AnchorService } from './anchor.service';
import { AnchorActiveChangeSource, IAnchorBox } from './anchor.type';

@Directive({
  selector: '[dAnchor]',
  host: {
    '(click)': 'beFocused()',
  },
})
export class AnchorDirective implements AfterViewInit, OnDestroy {
  readonly anchor = input<string>(undefined, { alias: 'dAnchor' });
  readonly anchorActive = input('active');

  readonly isActive = signal(false);
  activeChangeBy: AnchorActiveChangeSource;
  activeChangeSubscription: Subscription;
  activeChangeSubject = new ReplaySubject<boolean>(1);
  lastActiveBy: string;

  element: HTMLElement;
  boxElement: IAnchorBox | undefined;

  scrollListenTarget: Element | Window;
  REACH_TOP_VISION_OFFSET = 50;

  private THROTTLE_DELAY = 100;
  private THROTTLE_TRIGGER = 600;
  private scrollPreStart: number | null = null;
  private scrollTimer: any;

  private el = inject(ElementRef);
  private anchorService = inject(AnchorService);

  constructor() {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit() {
    this.activeChangeSubscription = this.activeChangeSubject.asObservable().subscribe((active) => {
      if (this.lastActiveBy) {
        this.element.classList.remove(this.lastActiveBy);
      }
      if (active) {
        this.element.classList.add(this.anchorActive());
        this.lastActiveBy = 'anchor-active-by-' + this.activeChangeBy;
        setTimeout(() => {
          this.element.classList.add(this.lastActiveBy);
        }, 0);
      } else {
        this.element.classList.remove(this.anchorActive());
      }
    });
  }

  ngOnDestroy() {
    this.scrollListenTarget?.removeEventListener('scroll', this.throttle);
    if (this.activeChangeSubscription) {
      this.activeChangeSubscription.unsubscribe();
    }
  }

  beFocused() {
    if (this.boxElement) {
      this.boxElement.forceActiveAnchor(this.anchor(), 'click-inside');
      this.boxElement.isScrollingToTarget = false;
    }
  }

  throttle = () => {
    const fn = this.checkActiveStatus;
    const time = Date.now();
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
    if (!this.scrollPreStart) {
      this.scrollPreStart = time;
    }
    if (time - this.scrollPreStart > this.THROTTLE_TRIGGER) {
      fn();
      this.scrollPreStart = null;
      this.scrollTimer = null;
    } else {
      this.scrollTimer = setTimeout(() => {
        fn();
        this.scrollPreStart = null;
        this.scrollTimer = null;
      }, this.THROTTLE_DELAY);
    }
  };

  checkActiveStatus = (activeChangeBy?: AnchorActiveChangeSource) => {
    if (!this.boxElement || this.boxElement.isScrollingToTarget) {
      return;
    }
    const dom = this.boxElement.scrollTarget();
    const fix = dom && dom instanceof Element ? dom.getBoundingClientRect().top : 0;
    const top = this.element.getBoundingClientRect().top - fix - (this.boxElement.view()?.top || 0);
    const bottom = this.element.getBoundingClientRect().bottom - fix - (this.boxElement.view()?.top || 0);
    const currentActiveAnchor = this.anchorService.currentActiveAnchor;

    if (
      this.anchor() === this.boxElement.defaultAnchor() &&
      (!currentActiveAnchor || currentActiveAnchor === this.boxElement.defaultAnchor())
    ) {
      this.activeChangeBy = activeChangeBy || 'scroll';
      this.setIsActive(bottom > this.REACH_TOP_VISION_OFFSET);
      return;
    }

    this.activeChangeBy = activeChangeBy || 'scroll';
    this.setIsActive(bottom > this.REACH_TOP_VISION_OFFSET && top < this.REACH_TOP_VISION_OFFSET);
  };

  setIsActive(active: boolean) {
    this.isActive.set(active);
    this.activeChangeSubject.next(active);
    if (active) {
      this.anchorService.setCurrentActive(this.anchor());
    } else if (this.anchorService.currentActiveAnchor === this.anchor()) {
      this.anchorService.setCurrentActive('');
    }
  }

  setBoxElement(box: IAnchorBox) {
    this.boxElement = box;
    this.updateScrollListenTarget();
  }

  updateScrollListenTarget() {
    if (this.scrollListenTarget || !this.boxElement) {
      return;
    }
    if (typeof window !== 'undefined') {
      this.scrollListenTarget = this.boxElement.scrollTarget() || window;
    }
    this.scrollListenTarget?.addEventListener('scroll', this.throttle, { passive: true });
  }
}
