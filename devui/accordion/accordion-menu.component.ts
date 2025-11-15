import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccordionBaseComponent } from './accordion-base-component.class';
import { AccordionService } from './accordion.service';
import { AccordionBaseMenu, AccordionMenuItem } from './accordion.type';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccordionListComponent } from './accordion-list.component';

@Component({
  selector: 'd-accordion-menu',
  imports: [NgTemplateOutlet],
  host: {
    class: 'devui-accordion-menu-item',
    '[class.open]': 'open()',
    '[class.devui-router-active]': 'routerLinkActivated()',
    '[class.devui-has-active-item]': 'hasActiveChildren()',
  },
  templateUrl: './accordion-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionMenuComponent extends AccordionBaseComponent<AccordionBaseMenu<AccordionMenuItem>> {
  childListSub: Subscription;
  accordionListFromView: AccordionListComponent; // AccordionListComponent

  open() {
    return this.keyOpen() === undefined && this.accordion.autoOpenActiveMenu ? this.childActivated() : this.keyOpen();
  }
  routerLinkActivated() {
    return this.accordionListFromView && this.accordionListFromView.routerLinkActivated();
  }
  hasActiveChildren() {
    return this.accordionListFromView && this.accordionListFromView.hasActiveChildren();
  }
  keyOpen() {
    return this.item() && this.item()[this.accordion.openKey()];
  }
  children() {
    return this.item() && this.item()[this.accordion.childrenKey()];
  }
  childActivated() {
    return this.routerLinkActivated() || this.hasActiveChildren();
  }
  menuItemTemplate = computed(() => this.accordion.menuItemTemplate());

  subs = inject(AccordionService)
    .getChildListInstance()
    .pipe(takeUntilDestroyed())
    .subscribe(({ listInstance, parent }) => {
      // list的parent与menu的item为同一数据，通过该属性匹配父子关系，避免互相嵌套导致循环依赖
      if (parent === this.item()) {
        // 延时赋值规避脏检查后值改变报错
        setTimeout(() => {
          this.accordionListFromView = listInstance;
        });
      }
    });

  toggle(event: MouseEvent) {
    this.accordion.menuToggleFn({
      item: this.item(),
      open: !this.open(),
      parent: this.parent(),
      event: event,
    });
  }
}
