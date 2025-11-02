import { CdkDrag, DragConstrainPosition, DragDropModule, DragRef, Point } from '@angular/cdk/drag-drop';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  DOCUMENT,
  input,
  numberAttribute,
  booleanAttribute,
  output,
  inject,
  viewChild,
  computed,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, switchMap } from 'rxjs';

@Component({
  selector: 'd-back-top',
  imports: [NgTemplateOutlet, DragDropModule],
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackTopComponent {
  customTemplate = input<TemplateRef<any>>();
  visibleHeight = input(300, { transform: numberAttribute });
  bottom = input('50px');
  right = input('30px');
  scrollTarget = input<HTMLElement>();
  draggable = input(false, { transform: booleanAttribute });
  backTopEvent = output<boolean>();
  dragEvent = output<boolean>();

  currScrollTop = signal(0);
  duration = 0;
  moveCursor = signal(false);
  isVisible = signal(false);

  SCROLL_REFRESH_INTERVAL = 100;
  MOUSEDOWN_DELAY = 180;
  RESIZE_DELAY = 300;

  public document = inject(DOCUMENT);

  backTopRef = viewChild(CdkDrag);

  constrainPosition: DragConstrainPosition = (
    userPointerPosition: Point,
    dragRef: DragRef,
    dimensions: DOMRect,
    pickupPositionInElement: Point
  ) => {
    let elementLeft = userPointerPosition.x - pickupPositionInElement.x;
    let elementTop = userPointerPosition.y - pickupPositionInElement.y;

    const elementRight = elementLeft + dimensions.width;
    const elementBottom = elementTop + dimensions.height;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    elementLeft = Math.max(elementLeft, 0);
    elementTop = Math.max(elementTop, 0);

    if (elementRight > windowWidth) {
      elementLeft = windowWidth - dimensions.width;
    }

    if (elementBottom > windowHeight) {
      elementTop = windowHeight - dimensions.height;
    }

    return {
      x: elementLeft,
      y: elementTop,
    };
  };

  computedScrollTarget = computed(() => {
    if (this.scrollTarget()) {
      this.backTopRef().element.nativeElement.style.position = 'absolute';
      this.scrollTarget().parentElement.style.position = 'relative';
    }
    return this.scrollTarget() || window;
  });

  scrollEvent = toObservable(this.computedScrollTarget)
    .pipe(
      switchMap((target) => fromEvent(target, 'scroll')),
      debounceTime(this.SCROLL_REFRESH_INTERVAL)
    )
    .subscribe(() => {
      this.showButton();
    });

  resize = fromEvent(window, 'resize')
    .pipe(takeUntilDestroyed(), debounceTime(this.RESIZE_DELAY))
    .subscribe(() => {
      this.backTopRef().reset();
    });

  showButton() {
    this.currScrollTop.set(
      this.computedScrollTarget() === window
        ? window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop
        : this.scrollTarget().scrollTop
    );
    if (this.isVisible() !== this.currScrollTop() >= this.visibleHeight()) {
      this.isVisible.update((origin) => !origin);
    }
  }

  goTop() {
    if (this.draggable() && this.duration > this.MOUSEDOWN_DELAY) {
      this.duration = 0;
      return;
    }
    if (this.computedScrollTarget() === window) {
      this.document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      this.document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      this.scrollTarget().style.scrollBehavior = 'smooth';
      this.scrollTarget().scrollTop = 0;
    }
    this.duration = 0;
    this.backTopEvent.emit(true);
  }

  dragStarted() {
    this.dragEvent.emit(true);
    this.moveCursor.set(true);
    this.duration = new Date().getTime();
  }

  dragReleased() {
    this.dragEvent.emit(false);
    this.moveCursor.set(false);
    this.duration = this.duration && new Date().getTime() - this.duration;
  }
}
