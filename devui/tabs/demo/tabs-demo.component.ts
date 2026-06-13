import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import withoutContentHtml from './without-content/without-content.component.html?raw';
import withoutContentTs from './without-content/without-content.component.ts.txt?raw';
import beforeChangeHtml from './before-change/before-change.component.html?raw';
import beforeChangeTs from './before-change/before-change.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import typePillsHtml from './type-pills/type-pills.component.html?raw';
import typePillsTs from './type-pills/type-pills.component.ts.txt?raw';
import typeOptionsHtml from './type-options/type-options.component.html?raw';
import typeOptionsTs from './type-options/type-options.component.ts.txt?raw';
import typeSliderHtml from './type-slider/type-slider.component.html?raw';
import typeSliderTs from './type-slider/type-slider.component.ts.txt?raw';
import typeWrappedHtml from './type-wrapped/type-wrapped.component.html?raw';
import typeWrappedTs from './type-wrapped/type-wrapped.component.ts.txt?raw';
import sizeHtml from './size/size.component.html?raw';
import sizeTs from './size/size.component.ts.txt?raw';
import addDeleteHtml from './add-delete/add-delete.component.html?raw';
import addDeleteTs from './add-delete/add-delete.component.ts.txt?raw';
import bigDataHtml from './big-data/big-data.component.html?raw';
import bigDataTs from './big-data/big-data.component.ts.txt?raw';
import bigDataScss from './big-data/big-data.component.scss?raw';
import configurableTabsHtml from './configurable-tabs/configurable-tabs.component.html?raw';
import configurableTabsTs from './configurable-tabs/configurable-tabs.component.ts.txt?raw';
import configurableTabsScss from './configurable-tabs/configurable-tabs.component.scss?raw';
import tabsTransferHtml from './configurable-tabs/tabs-transfer/tabs-transfer.component.html?raw';
import tabsTransferTs from './configurable-tabs/tabs-transfer/tabs-transfer.component.ts.txt?raw';
@Component({
  selector: 'd-demo-tabs',
  standalone: false,
  templateUrl: './tabs-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TabsDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  withoutContentSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: withoutContentHtml },
    { title: 'TS', language: 'typescript', code: withoutContentTs },
  ];

  beforeChangeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: beforeChangeHtml },
    { title: 'TS', language: 'typescript', code: beforeChangeTs },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
  ];
  typePillsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: typePillsHtml },
    { title: 'TS', language: 'typescript', code: typePillsTs },
  ];
  typeOptionsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: typeOptionsHtml },
    { title: 'TS', language: 'typescript', code: typeOptionsTs },
  ];
  typeSliderSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: typeSliderHtml },
    { title: 'TS', language: 'typescript', code: typeSliderTs },
  ];
  typeWrappedSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: typeWrappedHtml },
    { title: 'TS', language: 'typescript', code: typeWrappedTs },
  ];
  sizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: sizeHtml },
    { title: 'TS', language: 'typescript', code: sizeTs },
  ];
  AddDeleteSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: addDeleteHtml },
    { title: 'TS', language: 'typescript', code: addDeleteTs },
  ];
  BigDataSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: bigDataHtml },
    { title: 'TS', language: 'typescript', code: bigDataTs },
    { title: 'SCSS', language: 'css', code: bigDataScss },
  ];
  ConfigurableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: configurableTabsHtml },
    { title: 'TS', language: 'typescript', code: configurableTabsTs },
    { title: 'SCSS', language: 'css', code: configurableTabsScss },
    {
      title: 'tabs-transfer HTML',
      language: 'xml',
      code: tabsTransferHtml,
    },
    {
      title: 'tabs-transfer TS',
      language: 'typescript',
      code: tabsTransferTs,
    },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tabs.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tabs.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'type-pills', value: values['type-pills'] },
      { dAnchorLink: 'type-options', value: values['type-options'] },
      { dAnchorLink: 'type-slider', value: values['type-slider'] },
      { dAnchorLink: 'type-wrapped', value: values['type-wrapped'] },
      { dAnchorLink: 'size', value: values.size },
      { dAnchorLink: 'no-set-content', value: values['no-set-content'] },
      { dAnchorLink: 'custom-template', value: values['custom-template'] },
      { dAnchorLink: 'intercept-tab-switch', value: values['intercept-tab-switch'] },
      { dAnchorLink: 'add-delete', value: values['add-delete'] },
      { dAnchorLink: 'big-data', value: values['big-data'] },
      { dAnchorLink: 'custom-tabs-display-and-arrangement', value: values['custom-tabs-display-and-arrangement'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
