import { AfterViewInit, booleanAttribute, Directive, inject, input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';
import { AnchorBoxDirective } from './anchor-box.directive';
import { AnchorDirective } from './anchor.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AnchorActiveChangeSource } from './anchor.type';
import { scrollAnimate } from 'ng-devui/utils';

@Directive({
  selector: '[dAnchorBox][dAnchorHashSupport]',
})
export class AnchorBoxHashSupportDirective implements AfterViewInit {
  readonly updateUrlWhenAnchorActive = input(true, { transform: booleanAttribute });
  readonly scrollToAnchorByHashOnlyInit = input(false, { transform: booleanAttribute });
  manual = false;

  private box = inject(AnchorBoxDirective);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.box.activeChange
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        filter(() => this.updateUrlWhenAnchorActive())
      )
      .subscribe(this.navigateToHash);

    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.navigateToAnchor);
  }

  ngAfterViewInit(): void {
    const frag = this.route.snapshot.fragment;
    setTimeout(() => {
      this.scrollToFragment(frag);
    }, 120);
  }

  navigateToHash = (targetAnchor: AnchorDirective) => {
    if (targetAnchor.activeChangeBy === 'initial') {
      return;
    }
    this.router.navigate([], { fragment: targetAnchor.anchor(), replaceUrl: true });
    this.manual = true;
  };

  navigateToAnchor = (event: NavigationEnd) => {
    if (this.manual) {
      this.manual = false;
      return;
    }
    if (this.scrollToAnchorByHashOnlyInit()) {
      return;
    }
    const frag = this.router.parseUrl(event.url).fragment;
    this.scrollToFragment(frag);
  };

  scrollToFragment = (frag: string) => {
    if (!frag) {
      return;
    }
    if (this.box.anchorMap[frag]) {
      this.scrollToAnchorByName(frag, 'fragment');
    }
  };

  anchorBlock: AnchorDirective | undefined;

  scrollToAnchorByName(name: string, activeChangeBy?: AnchorActiveChangeSource) {
    if (typeof document === 'undefined') {
      return;
    }
    if (!this.box) {
      return;
    }
    this.anchorBlock = this.box.anchorMap?.[name];
    if (!this.anchorBlock) {
      return;
    }
    const box = this.box;
    const callback = () => {
      setTimeout(() => {
        box.forceActiveAnchor(name, activeChangeBy || 'anchor-link');
        box.isScrollingToTarget = false;
      }, 120);
    };
    const container2 = box.scrollTarget() || document.documentElement;
    const anchorEl = this.anchorBlock.element;
    ((container: Element, anchor: Element) => {
      let containerScrollTop = container.scrollTop;
      let containerOffsetTop = container.getBoundingClientRect().top;
      if (container === document.documentElement) {
        containerScrollTop += document.body.scrollTop;
        containerOffsetTop = 0;
      }
      scrollAnimate(
        container,
        containerScrollTop,
        containerScrollTop + anchor.getBoundingClientRect().top - containerOffsetTop - (box.view()?.top || 0),
        undefined,
        undefined,
        callback
      );
    })(container2, anchorEl);
    box.isScrollingToTarget = true;
  }

}
