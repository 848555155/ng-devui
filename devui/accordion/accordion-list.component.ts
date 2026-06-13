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
  host: {
    '[class.devui-accordion-show-animate]': 'animateState()',
  },
  templateUrl: './accordion-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [expandCollapse, expandCollapseForDomDestroy],
  preserveWhitespaces: false,
})
export class AccordionListComponent {
  data = input<Array<AccordionMenuItem>>();
  deepth = input(0, { transform: numberAttribute });
  parent = input<AccordionMenuItem>();
  accordionMenuQueryList = viewChildren(AccordionMenuComponent);
  accordionItemRouterlinkQueryList = viewChildren(AccordionItemRouterlinkComponent);

  animateState = computed(() => this.accordion.showAnimation());
  loading = computed(() => this.parent() && this.parent()[this.accordion.loadingKey()]);
  noContent = computed(() => this.data() === undefined || this.data() === null || this.data().length === 0);
  linkTypeKey = computed(() => this.accordion.linkTypeKey());
  childrenKey = computed(() => this.accordion.childrenKey());
  activeKey = computed(() => this.accordion.activeKey());
  innerListTemplate = computed(() => this.accordion.innerListTemplate());
  loadingTemplate = computed(() => this.accordion.loadingTemplate());
  noContentTemplate = computed(() => this.accordion.noContentTemplate());
  linkType = computed(() => this.accordion.linkType());
  i18nCommonText = computed(() => this.accordion.i18nCommonText);
  showNoContent = computed(() => this.accordion.showNoContent());

  routerLinkActivated = computed(() =>
    this.accordionItemRouterlinkQueryList().some((airlc) => this.isLinkRouterActive(airlc)) ||
    this.accordionMenuQueryList().some((amc) => this.isMenuRouterActive(amc))
  );

  hasActiveChildren = computed(() =>
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
