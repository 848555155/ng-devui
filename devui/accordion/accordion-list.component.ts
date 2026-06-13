import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  OnDestroy,
  OnInit,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { expandCollapse, expandCollapseForDomDestroy } from 'ng-devui/utils';
import { AccordionItemRouterlinkComponent } from './accordion-item-routerlink.component';
import { AccordionMenuComponent } from './accordion-menu.component';
import { ACCORDION } from './accordion-token';
import { AccordionService } from './accordion.service';
import { AccordionMenuItem } from './accordion.type';
import { AccordionItemHreflinkComponent } from './accordion-item-hreflink.component';
import { AccordionItemComponent } from './accordion-item.component';
import { NgTemplateOutlet } from '@angular/common';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [expandCollapse, expandCollapseForDomDestroy],
  preserveWhitespaces: false,
})
export class AccordionListComponent implements OnInit, OnDestroy {
  data = input<Array<AccordionMenuItem>>();
  deepth = input(0, { transform: numberAttribute });
  parent = input<AccordionMenuItem>();
  accordionMenuQueryList = viewChildren(AccordionMenuComponent);
  accordionItemRouterlinkQueryList = viewChildren(AccordionItemRouterlinkComponent);

  animateState() {
    return this.accordion.showAnimation;
  }
  loading() {
    return this.parent() && this.parent()[this.accordion.loadingKey()];
  }
  noContent() {
    return this.data() === undefined || this.data() === null || this.data().length === 0;
  }
  linkTypeKey() {
    return this.accordion.linkTypeKey();
  }
  childrenKey() {
    return this.accordion.childrenKey();
  }
  activeKey() {
    return this.accordion.activeKey();
  }
  innerListTemplate() {
    return this.accordion.innerListTemplate();
  }
  loadingTemplate() {
    return this.accordion.loadingTemplate();
  }
  noContentTemplate() {
    return this.accordion.noContentTemplate();
  }
  linkType() {
    return this.accordion.linkType();
  }
  i18nCommonText() {
    return this.accordion.i18nCommonText;
  }
  showNoContent() {
    return this.accordion.showNoContent();
  }
  routerLinkActivated() {
    return (
      (!!this.accordionItemRouterlinkQueryList() &&
        this.accordionItemRouterlinkQueryList().some((airlc) => this.isLinkRouterActive(airlc))) ||
      (!!this.accordionMenuQueryList() && this.accordionMenuQueryList().some((amc) => this.isMenuRouterActive(amc)))
    );
  }
  hasActiveChildren() {
    return (
      (!!this.accordionMenuQueryList() && this.accordionMenuQueryList().some((amc) => this.isMenuDataActive(amc))) ||
      (!!this.data() && !!this.data().length && this.data().some((item) => this.isItemData(item) && this.isItemDataActive(item)))
    );
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

  private accordion = inject(ACCORDION);
  private accordionService = inject(AccordionService);

  ngOnInit(): void {
    if (this.parent()) {
      this.accordionService.setChildListInstance(this, this.parent());
    }
  }

  ngOnDestroy(): void {
    if (this.parent()) {
      this.accordionService.setChildListInstance(undefined, this.parent());
    }
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
