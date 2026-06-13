import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  forwardRef,
  inject,
  input,
  model,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  signal,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { I18nService } from 'ng-devui/i18n';
import { DevConfigService, WithConfig } from 'ng-devui/utils';
import { Subscription } from 'rxjs';
import { ACCORDION } from './accordion-token';
import { AccordionItemClickEvent, AccordionMenuToggleEvent, AccordionMenuType, AccordionOptions } from './accordion.type';
import { AccordionListComponent } from './accordion-list.component';
@Component({
  selector: 'd-accordion',
  imports: [AccordionListComponent],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  preserveWhitespaces: false,
  providers: [
    {
      provide: ACCORDION,
      useExisting: forwardRef(() => AccordionComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements AccordionOptions, OnChanges, OnInit, OnDestroy {
  data = model<Array<any> | AccordionMenuType>();
  titleKey = input('title');
  loadingKey = input('loading');
  childrenKey = input('children');
  disabledKey = input('disabled');
  activeKey = input('active');
  openKey = input('open');

  menuItemTemplate = input<TemplateRef<any>>();
  itemTemplate = input<TemplateRef<any>>();

  menuToggle = output<AccordionMenuToggleEvent>();
  itemClick = output<AccordionItemClickEvent>();
  activeItemChange = output<any>();

  restrictOneOpen = input(false);
  autoOpenActiveMenu = input(false);
  showNoContent = input(true);
  noContentTemplate = input<TemplateRef<any>>();
  loadingTemplate = input<TemplateRef<any>>();
  innerListTemplate = input<TemplateRef<any>>();

  linkType = input<'routerLink' | 'hrefLink' | 'dependOnLinkTypeKey' | '' | string>('');
  linkTypeKey = input('linkType');
  linkKey = input('link');
  linkTargetKey = input('target');
  linkDefaultTarget = input('_self');

  accordionType = input<'normal' | 'embed'>('normal');
  showAnimation: boolean = true;

  activeItem: any;
  i18nCommonText: any;
  private i18nSubscription: Subscription | null = null;

  private cdr = inject(ChangeDetectorRef);
  private i18n = inject(I18nService);
  private devConfigService = inject(DevConfigService);

  constructor() {
    effect(() => {
      this.initActiveItem();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const autoOpenActiveMenu = changes['autoOpenActiveMenu'];
    if (autoOpenActiveMenu) {
      if (this.autoOpenActiveMenu() && autoOpenActiveMenu.previousValue === false) {
        this.cleanOpenData();
      }
    }
  }

  ngOnInit() {
    this.i18nCommonText = this.i18n.getI18nText().common;
    this.i18nSubscription = this.i18n.langChange().subscribe((data) => {
      this.i18nCommonText = data.common;
    });
  }

  ngOnDestroy() {
    if (this.i18nSubscription) {
      this.i18nSubscription.unsubscribe();
    }
  }

  private flatten(arr: Array<any>, childrenKey = 'children', includeParent = false, includeLeaf = true) {
    return arr.reduce((acc, cur) => {
      const children = cur[childrenKey];
      if (children === undefined) {
        if (includeLeaf) {
          acc.push(cur);
        }
      } else {
        if (includeParent) {
          acc.push(cur);
        }
        if (Array.isArray(children)) {
          acc.push(...this.flatten(children, childrenKey, includeParent));
        }
      }
      return acc;
    }, []);
  }

  private cleanOpenData() {
    this.flatten(this.data(), this.childrenKey(), true, false).forEach((item) => {
      item[this.openKey()] = undefined;
    });
  }
  // 默认激活
  initActiveItem() {
    const activeItem = this.flatten(this.data(), this.childrenKey())
      .filter((item) => item[this.activeKey()])
      .pop();
    if (activeItem) {
      if (!this.activeItem) {
        this.activeItemFn(activeItem);
      }
    } else {
      this.activeItem = undefined;
    }
  }

  // 点击了可点击菜单
  public itemClickFn = (itemEvent: AccordionItemClickEvent) => {
    const prevActiveItem = this.activeItem;
    this.activeItemFn(itemEvent.item);
    this.itemClick.emit({ ...itemEvent, prevActiveItem: prevActiveItem });
  };

  linkItemClickFn = (itemEvent: AccordionItemClickEvent) => {
    const prevActiveItem = this.activeItem;
    this.activeItem = itemEvent.item;
    this.itemClick.emit({ ...itemEvent, prevActiveItem: prevActiveItem });
  };

  // 打开或关闭可折叠菜单
  public menuToggleFn = (menuEvent: AccordionMenuToggleEvent) => {
    this.openMenuFn(menuEvent.item, menuEvent.open);
    this.menuToggle.emit(menuEvent);
  };

  // 激活子菜单项并去掉其他子菜单的激活
  activeItemFn(item) {
    if (this.activeItem && this.activeItem[this.activeKey()]) {
      this.activeItem[this.activeKey()] = false;
      this.activeItem['$c'].cdr.markForCheck();
    }
    item[this.activeKey()] = true;
    this.activeItem = item;
    this.activeItemChange.emit(this.activeItem);
  }

  // 打开或关闭一级菜单，如果有限制只能展开一项则关闭其他一级菜单
  openMenuFn(item, open: boolean) {
    if (open && this.restrictOneOpen()) {
      this.data.update((c) => {
        c.forEach((itemtemp) => {
          itemtemp[this.openKey()] = false;
        });
        return c;
      });
    }
    this.data.update((c) => {
      item[this.openKey()] = open;
      return c;
    });
  }
}
