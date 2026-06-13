import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/select-basic.component.html?raw';
import basicTs from './basic/select-basic.component.ts.txt?raw';
import customSearchHtml from './custom-search/custom-search.component.html?raw';
import customSearchTs from './custom-search/custom-search.component.ts.txt?raw';
import selectAllHtml from './select-all/select-all.component.html?raw';
import selectAllTs from './select-all/select-all.component.ts.txt?raw';
import itemTemplateHtml from './item-template/select-template.component.html?raw';
import itemTemplateTs from './item-template/select-template.component.ts.txt?raw';
import allowClearValueHtml from './allow-clear-value/allow-clear-value.component.html?raw';
import allowClearValueTs from './allow-clear-value/allow-clear-value.component.ts.txt?raw';
import allowClearValueCss from './allow-clear-value/allow-clear-value.component.css?raw';
import customAreaHtml from './custom-area/custom-area.component.html?raw';
import customAreaTs from './custom-area/custom-area.component.ts.txt?raw';
import customAreaDirectionHtml from './custom-area-direction/custom-area-direction.component.html?raw';
import customAreaDirectionTs from './custom-area-direction/custom-area-direction.component.ts.txt?raw';
import customAreaDirectionScss from './custom-area-direction/custom-area-direction.component.scss?raw';
import appendToBodyHtml from './append-to-body/append-to-body.component.html?raw';
import appendToBodyTs from './append-to-body/append-to-body.component.ts.txt?raw';
import disabledHtml from './disabled/disabled.component.html?raw';
import disabledTs from './disabled/disabled.component.ts.txt?raw';
import labelizationHtml from './labelization/labelization.component.html?raw';
import labelizationTs from './labelization/labelization.component.ts.txt?raw';
import labelizationCss from './labelization/labelization.component.css?raw';
import objectFilterHtml from './object-filter/object-filter.component.html?raw';
import objectFilterTs from './object-filter/object-filter.component.ts.txt?raw';
import lazyLoadVirtualScrollHtml from './lazy-load-virtual-scroll/lazy-load-virtual-scroll.component.html?raw';
import lazyLoadVirtualScrollTs from './lazy-load-virtual-scroll/lazy-load-virtual-scroll.component.ts.txt?raw';
import lazyLoadVirtualScrollScss from './lazy-load-virtual-scroll/lazy-load-virtual-scroll.component.scss?raw';
import loadingHtml from './loading/loading.component.html?raw';
import loadingTs from './loading/loading.component.ts.txt?raw';
import userLimitSelectedNumberHtml from './user-limit-selected-number/user-limit-selected-number.component.html?raw';
import userLimitSelectedNumberTs from './user-limit-selected-number/user-limit-selected-number.component.ts.txt?raw';
import multiKeepOrderHtml from './multi-keep-order/multi-keep-order.component.html?raw';
import multiKeepOrderTs from './multi-keep-order/multi-keep-order.component.ts.txt?raw';
import userSearchNLazyloadHtml from './user-search-n-lazyload/user-search-n-lazyload.component.html?raw';
import userSearchNLazyloadTs from './user-search-n-lazyload/user-search-n-lazyload.component.ts.txt?raw';
import userMailSearchHtml from './user-mail-search/user-mail-search.component.html?raw';
import userMailSearchTs from './user-mail-search/user-mail-search.component.ts.txt?raw';
import modelValueHtml from './model-value/model-value.component.html?raw';
import modelValueTs from './model-value/model-value.component.ts.txt?raw';
import modelValueTs1 from './model-value/parse-from.pipe.ts.txt?raw';
import modelValueTs2 from './model-value/map-to.pipe.ts.txt?raw';

@Component({
  selector: 'd-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss'],
  standalone: false
})
export class SelectDemoComponent implements OnInit, OnDestroy {
  SelectBasicComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  SelectObjectComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customSearchHtml },
    { title: 'TS', language: 'typescript', code: customSearchTs },
  ];
  SelectAllComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: selectAllHtml },
    { title: 'TS', language: 'typescript', code: selectAllTs },
  ];
  SelectTemplateComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: itemTemplateHtml },
    { title: 'TS', language: 'typescript', code: itemTemplateTs },
  ];
  AllowClearValueComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: allowClearValueHtml },
    { title: 'TS', language: 'typescript', code: allowClearValueTs },
    { title: 'SCSS', language: 'css', code: allowClearValueCss },
  ];
  CustomAreaComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customAreaHtml },
    { title: 'TS', language: 'typescript', code: customAreaTs },
  ];
  CustomAreaDirectionComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customAreaDirectionHtml },
    { title: 'TS', language: 'typescript', code: customAreaDirectionTs },
    { title: 'SCSS', language: 'css', code: customAreaDirectionScss },
  ];
  AppendToBodyComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: appendToBodyHtml },
    { title: 'TS', language: 'typescript', code: appendToBodyTs },
  ];
  DisabledComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
  ];
  LabelizationComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: labelizationHtml },
    { title: 'TS', language: 'typescript', code: labelizationTs },
    { title: 'SCSS', language: 'css', code: labelizationCss },
  ];
  ObjectFilterComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: objectFilterHtml },
    { title: 'TS', language: 'typescript', code: objectFilterTs },
  ];
  LazyLoadVirtualScrollComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: lazyLoadVirtualScrollHtml },
    { title: 'TS', language: 'typescript', code: lazyLoadVirtualScrollTs },
    { title: 'SCSS', language: 'css', code: lazyLoadVirtualScrollScss },
  ];
  LoadingComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: loadingHtml },
    { title: 'TS', language: 'typescript', code: loadingTs },
  ];
  UserLimitSelectedNumberComponent: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: userLimitSelectedNumberHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: userLimitSelectedNumberTs,
    },
  ];
  MultiKeepOrderComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiKeepOrderHtml },
    { title: 'TS', language: 'typescript', code: multiKeepOrderTs },
  ];
  UserSearchNLazyLoadComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: userSearchNLazyloadHtml },
    { title: 'TS', language: 'typescript', code: userSearchNLazyloadTs },
  ];
  UserMailSearchComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: userMailSearchHtml },
    { title: 'TS', language: 'typescript', code: userMailSearchTs },
  ];
  ModelValueComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: modelValueHtml },
    { title: 'TS', language: 'typescript', code: modelValueTs },
    { title: 'ParseFromPipe', language: 'typescript', code: modelValueTs1 },
    { title: 'MapToPipe', language: 'typescript', code: modelValueTs2 },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.select.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.select.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'object-filter', value: values['object-filter'] },
      { dAnchorLink: 'custom-search', value: values['custom-search'] },
      { dAnchorLink: 'select-all', value: values['select-all'] },
      { dAnchorLink: 'select-template', value: values['select-template'] },
      { dAnchorLink: 'labelization', value: values.labelization },
      { dAnchorLink: 'disabled', value: values.disabled },
      { dAnchorLink: 'allow-clear-value', value: values['allow-clear-value'] },
      { dAnchorLink: 'append-to-body', value: values['append-to-body'] },
      { dAnchorLink: 'lazy-load-virtual-scroll', value: values['lazy-load-virtual-scroll'] },
      { dAnchorLink: 'async-loading', value: values['async-loading'] },
      { dAnchorLink: 'custom-area', value: values['custom-area'] },
      { dAnchorLink: 'custom-area-direction', value: values['custom-area-direction'] },
      { dAnchorLink: 'multi-keep-order', value: values['multi-keep-order'] },
      { dAnchorLink: 'user-limit-selected-number', value: values['user-limit-selected-number'] },
      { dAnchorLink: 'user-search-n-lazyload', value: values['user-search-n-lazyload'] },
      { dAnchorLink: 'user-mail-search', value: values['user-mail-search'] },
      { dAnchorLink: 'model-value', value: values['model-value'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
