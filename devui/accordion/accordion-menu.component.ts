import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccordionBaseComponent } from './accordion-base-component.class';
import { AccordionService } from './accordion.service';
import { AccordionBaseMenu, AccordionMenuItem } from './accordion.type';
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
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionMenuComponent extends AccordionBaseComponent<AccordionBaseMenu<AccordionMenuItem>> {
  accordionListFromView = signal<AccordionListComponent | null>(null);

  open = computed(() => {
    const keyOpen = this.item() && this.item()[this.accordion.openKey()];
    void this.accordion.stateVersion();
    return keyOpen === undefined && this.accordion.autoOpenActiveMenu() ? this.childActivated() : keyOpen;
  });

  routerLinkActivated = computed(() => this.accordionListFromView()?.routerLinkActivated() || false);

  hasActiveChildren = computed(() => this.accordionListFromView()?.hasActiveChildren() || false);

  keyOpen = computed(() => this.item() && this.item()[this.accordion.openKey()]);

  children = computed(() => this.item() && this.item()[this.accordion.childrenKey()]);

  childActivated = computed(() => this.routerLinkActivated() || this.hasActiveChildren());

  menuItemTemplate = computed(() => this.accordion.menuItemTemplate());

  sub = inject(AccordionService)
    .getChildListInstance()
    .pipe(takeUntilDestroyed())
    .subscribe(({ listInstance, parent }) => {
      if (parent === this.item()) {
        setTimeout(() => {
          this.accordionListFromView.set(listInstance);
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
