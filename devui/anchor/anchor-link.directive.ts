import { Directive, forwardRef, HostBinding, Inject, input, OnDestroy, OnInit } from '@angular/core';
import { scrollAnimate } from 'ng-devui/utils';
import { AnchorBoxDirective } from './anchor-box.directive';
import { AnchorDirective } from './anchor.directive';
import { AnchorActiveChangeSource } from './anchor.type';

@Directive({
  selector: '[dAnchorLink]',
  host: {
    '(click)': 'scrollToAnchor()',
  },
})
export class AnchorLinkDirective implements OnInit, OnDestroy {
  @HostBinding('class') get anchorActiveClass() {
    return this.anchorBlock && this.anchorBlock.isActive() ? this.anchorActive() || '' : '';
  }

  anchorName = input<string>('', { alias: 'dAnchorLink' });
  anchorActive = input<string>('');

  boxElement: AnchorBoxDirective | undefined;
  anchorBlock: AnchorDirective | undefined;
  bindingAnchorTimer: any;
  subscription: any;

  constructor(@Inject(forwardRef(() => AnchorBoxDirective)) box: AnchorBoxDirective) {
    this.boxElement = box;
  }

  ngOnInit() {
    this.subscribeAnchorMapChange();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.bindingAnchorTimer) {
      clearTimeout(this.bindingAnchorTimer);
    }
  }

  subscribeAnchorMapChange() {
    this.bindingAnchorTimer = setTimeout(() => {
      this.bindAnchorAfterBoxReady();
    }, 100);
  }

  bindAnchorAfterBoxReady = () => {
    const name = this.anchorName();
    if (!name) {
      return;
    }
    if (this.boxElement && this.boxElement.anchorMap) {
      setTimeout(() => {
        this.anchorBlock = this.boxElement?.anchorMap?.[name];
      }, 0);
    } else {
      this.bindingAnchorTimer = setTimeout(this.bindAnchorAfterBoxReady, 500);
    }
  };

  scrollToAnchorByName(name: string, activeChangeBy?: AnchorActiveChangeSource) {
    if (typeof document === 'undefined') {
      return;
    }
    if (!this.boxElement) {
      return;
    }
    this.anchorBlock = this.boxElement.anchorMap?.[name];
    if (!this.anchorBlock) {
      return;
    }
    const box = this.boxElement;
    const callback = () => {
      setTimeout(() => {
        box.forceActiveAnchor(name, activeChangeBy || 'anchor-link');
        box.isScrollingToTarget = false;
      }, 120);
    };
    const container = box.scrollTarget() || document.documentElement;
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
    })(container, anchorEl);
    box.isScrollingToTarget = true;
  }

  scrollToAnchor(activeChangeBy?: AnchorActiveChangeSource) {
    this.scrollToAnchorByName(this.anchorName(), activeChangeBy);
  }
}
