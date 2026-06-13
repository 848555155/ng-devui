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
  templateUrl: './accordion-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'devui-accordion-menu-item',
    '[class.open]': 'open()',
    '[class.devui-router-active]': 'routerLinkActivated()',
    '[class.devui-has-active-item]': 'hasActiveChildren()',
  },
  preserveWhitespaces: false
})
export class AccordionMenuComponent extends AccordionBaseComponent<AccordionBaseMenu<AccordionMenuItem>> {
  readonly accordionListFromView = signal<AccordionListComponent | null>(null);

  readonly open = computed(() => {
    const keyOpen = this.item() && this.item()[this.accordion.openKey()];
    void this.accordion.stateVersion();
    return keyOpen === undefined && this.accordion.autoOpenActiveMenu() ? this.childActivated() : keyOpen;
  });

  readonly routerLinkActivated = computed(() => this.accordionListFromView()?.routerLinkActivated() || false);

  readonly hasActiveChildren = computed(() => this.accordionListFromView()?.hasActiveChildren() || false);

  readonly keyOpen = computed(() => this.item() && this.item()[this.accordion.openKey()]);

  readonly children = computed(() => this.item() && this.item()[this.accordion.childrenKey()]);

  readonly childActivated = computed(() => this.routerLinkActivated() || this.hasActiveChildren());

  readonly menuItemTemplate = computed(() => this.accordion.menuItemTemplate());

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
