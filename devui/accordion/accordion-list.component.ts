import {
  Component,
  computed,
  inject,
  input,
  numberAttribute,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { expandCollapse, expandCollapseForDomDestroy } from 'ng-devui/utils';
import { AccordionItemRouterlinkComponent } from './accordion-item-routerlink.component';
import { AccordionMenuComponent } from './accordion-menu.component';
import { ACCORDION } from './accordion-token';
import { AccordionService } from './accordion.service';
import { AccordionMenuItem } from './accordion.type';
import { AccordionItemHreflinkComponent } from './accordion-item-hreflink.component';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'd-accordion-list',
  imports: [
    AccordionMenuComponent,
    AccordionItemRouterlinkComponent,
    AccordionItemHreflinkComponent,
    AccordionItemComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './accordion-list.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.devui-accordion-show-animate]': 'animateState()',
  },
  animations: [expandCollapse, expandCollapseForDomDestroy],
  preserveWhitespaces: false
})
export class AccordionListComponent {
  readonly data = input<Array<AccordionMenuItem>>();
  readonly deepth = input(0, { transform: numberAttribute });
  readonly parent = input<AccordionMenuItem>();
  readonly accordionMenuQueryList = viewChildren(AccordionMenuComponent);
  readonly accordionItemRouterlinkQueryList = viewChildren(AccordionItemRouterlinkComponent);

  readonly animateState = computed(() => this.accordion.showAnimation());
  readonly loading = computed(() => this.parent() && this.parent()[this.accordion.loadingKey()]);
  readonly noContent = computed(() => this.data() === undefined || this.data() === null || this.data().length === 0);
  readonly linkTypeKey = computed(() => this.accordion.linkTypeKey());
  readonly childrenKey = computed(() => this.accordion.childrenKey());
  readonly activeKey = computed(() => this.accordion.activeKey());
  readonly innerListTemplate = computed(() => this.accordion.innerListTemplate());
  readonly loadingTemplate = computed(() => this.accordion.loadingTemplate());
  readonly noContentTemplate = computed(() => this.accordion.noContentTemplate());
  readonly linkType = computed(() => this.accordion.linkType());
  readonly i18nCommonText = computed(() => this.accordion.i18nCommonText);
  readonly showNoContent = computed(() => this.accordion.showNoContent());

  readonly routerLinkActivated = computed(() =>
    this.accordionItemRouterlinkQueryList().some((airlc) => this.isLinkRouterActive(airlc)) ||
    this.accordionMenuQueryList().some((amc) => this.isMenuRouterActive(amc))
  );

  readonly hasActiveChildren = computed(() =>
    this.accordionMenuQueryList().some((amc) => this.isMenuDataActive(amc)) ||
    (!!this.data().length && this.data().some((item) => this.isItemData(item) && this.isItemDataActive(item)))
  );

  private accordion = inject(ACCORDION);
  private accordionService = inject(AccordionService);

  constructor() {
    this.accordionService.setChildListInstance(this, this.parent());
  }

  private isLinkRouterActive(airlc: AccordionItemRouterlinkComponent) {
    return airlc.routerLinkActivated();
  }

  private isMenuRouterActive(amc: AccordionMenuComponent) {
    return amc.routerLinkActivated();
  }

  private isMenuDataActive(amc: AccordionMenuComponent) {
    return amc.hasActiveChildren();
  }

  private isItemDataActive(item: AccordionMenuItem) {
    return !!item[this.activeKey()];
  }

  private isItemData(item: AccordionMenuItem) {
    return item[this.childrenKey()] === undefined;
  }

  menuToggleItemFn = (item: any, event?: MouseEvent) => {
    this.accordion.menuToggleFn({
      item: item,
      open: !item[this.accordion.openKey()],
      parent: this.parent().parent(),
      event: event,
    });
  };

  itemClickItemFn = (item: any, event?: MouseEvent) => {
    this.accordion.itemClickFn({
      item: item,
      parent: this.parent(),
      event: event,
    });
  };

  getOpenState(item: AccordionMenuItem, list: AccordionListComponent) {
    let stateFlag = false;
    if (item && list) {
      const open = item[this.accordion.openKey()];
      const childActivated = list.routerLinkActivated() || list.hasActiveChildren();
      stateFlag = open === undefined && this.accordion.autoOpenActiveMenu() ? childActivated : open;
    }
    return stateFlag ? 'expanded' : 'collapsed';
  }
}
