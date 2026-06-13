import {
  Component,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  signal,
  TemplateRef,
  untracked,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { I18nService } from 'ng-devui/i18n';
import { DevConfigService } from 'ng-devui/utils';
import { ACCORDION } from './accordion-token';
import { AccordionItemClickEvent, AccordionMenuToggleEvent, AccordionMenuType, AccordionOptions } from './accordion.type';
import { AccordionListComponent } from './accordion-list.component';

@Component({
  selector: 'd-accordion',
  imports: [AccordionListComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  providers: [
    {
      provide: ACCORDION,
      useExisting: forwardRef(() => AccordionComponent),
    },
  ],
  preserveWhitespaces: false
})
export class AccordionComponent implements AccordionOptions {
  readonly data = model<Array<any> | AccordionMenuType>();
  readonly titleKey = input('title');
  readonly loadingKey = input('loading');
  readonly childrenKey = input('children');
  readonly disabledKey = input('disabled');
  readonly activeKey = input('active');
  readonly openKey = input('open');

  readonly menuItemTemplate = input<TemplateRef<any>>();
  readonly itemTemplate = input<TemplateRef<any>>();

  menuToggle = output<AccordionMenuToggleEvent>();
  itemClick = output<AccordionItemClickEvent>();
  activeItemChange = output<any>();

  readonly restrictOneOpen = input(false);
  readonly autoOpenActiveMenu = input(false);
  readonly showNoContent = input(true);
  readonly noContentTemplate = input<TemplateRef<any>>();
  readonly loadingTemplate = input<TemplateRef<any>>();
  readonly innerListTemplate = input<TemplateRef<any>>();

  readonly linkType = input<'routerLink' | 'hrefLink' | 'dependOnLinkTypeKey' | '' | string>('');
  readonly linkTypeKey = input('linkType');
  readonly linkKey = input('link');
  readonly linkTargetKey = input('target');
  readonly linkDefaultTarget = input('_self');

  readonly accordionType = input<'normal' | 'embed'>('normal');
  readonly showAnimation = input(true);

  readonly stateVersion = signal(0);

  activeItem: any;
  i18nCommonText: any;

  private i18n = inject(I18nService);
  private devConfigService = inject(DevConfigService);

  constructor() {
    this.i18nCommonText = this.i18n.getI18nText().common;
    this.i18n.langChange()
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this.i18nCommonText = data.common;
      });

    effect(() => {
      this.initActiveItem();
    });

    effect(() => {
      if (this.autoOpenActiveMenu()) {
        untracked(() => this.cleanOpenData());
      }
    });
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

  public menuToggleFn = (menuEvent: AccordionMenuToggleEvent) => {
    this.openMenuFn(menuEvent.item, menuEvent.open);
    this.menuToggle.emit(menuEvent);
  };

  activeItemFn(item) {
    if (this.activeItem && this.activeItem[this.activeKey()]) {
      this.activeItem[this.activeKey()] = false;
    }
    item[this.activeKey()] = true;
    this.activeItem = item;
    this.stateVersion.update((v) => v + 1);
    this.activeItemChange.emit(this.activeItem);
  }

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
    this.stateVersion.update((v) => v + 1);
  }
}
