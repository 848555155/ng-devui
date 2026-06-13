import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic-datepicker-pro.component.html?raw';
import basicTs from './basic/basic-datepicker-pro.component.ts.txt?raw';
import showTimeHtml from './show-time/show-time-picker.component.html?raw';
import showTimeTs from './show-time/show-time-picker.component.ts.txt?raw';
import markedTypeHtml from './marked-type/marked-type.component.html?raw';
import markedTypeTs from './marked-type/marked-type.component.ts.txt?raw';
import templateHtml from './template/datepicker-template.component.html?raw';
import templateScss from './template/datepicker-template.component.scss?raw';
import templateTs from './template/datepicker-template.component.ts.txt?raw';
import monthYearPickerHtml from './month-year-picker/month-year-picker.component.html?raw';
import monthYearPickerTs from './month-year-picker/month-year-picker.component.ts.txt?raw';
import rangeTypeHtml from './range-type/range-type-picker.component.html?raw';
import rangeTypeTs from './range-type/range-type-picker.component.ts.txt?raw';
import rangeTemplateHtml from './range-template/range-template.component.html?raw';
import rangeTemplateScss from './range-template/range-template.component.scss?raw';
import rangeTemplateTs from './range-template/range-template.component.ts.txt?raw';
import hostTemplateHtml from './host-template/datepicker-host-template.component.html?raw';
import hostTemplateTs from './host-template/datepicker-host-template.component.ts.txt?raw';
import staticPanelHtml from './static-panel/datepicker-pro-static-panel.component.html?raw';
import staticPanelTs from './static-panel/datepicker-pro-static-panel.component.ts.txt?raw';
import staticPanelScss from './static-panel/datepicker-pro-static-panel.component.scss?raw';
import selectTypeHtml from './select-type/select-type.component.html?raw';
import selectTypeTs from './select-type/select-type.component.ts.txt?raw';
import selectTypeScss from './select-type/select-type.component.scss?raw';
import tabTypeHtml from './tab-type/datepicker-pro-tab-type.component.html?raw';
import tabTypeTs from './tab-type/datepicker-pro-tab-type.component.ts.txt?raw';
import tabTypeScss from './tab-type/datepicker-pro-tab-type.component.scss?raw';
@Component({
  selector: 'd-datepicker-pro-demo',
  templateUrl: './datepicker-pro-demo.component.html',
  standalone: false
})
export class DatepickerProDemoComponent implements OnInit, OnDestroy {
  BasicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  showTimeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: showTimeHtml },
    { title: 'TS', language: 'typescript', code: showTimeTs },
  ];

  markedTypeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: markedTypeHtml },
    { title: 'TS', language: 'typescript', code: markedTypeTs },
  ];

  templateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: templateHtml },
    { title: 'SCSS', language: 'css', code: templateScss },
    { title: 'TS', language: 'typescript', code: templateTs },
  ];

  monthYearSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: monthYearPickerHtml },
    { title: 'TS', language: 'typescript', code: monthYearPickerTs },
  ];

  rangeTypeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: rangeTypeHtml },
    { title: 'TS', language: 'typescript', code: rangeTypeTs },
  ];

  rangeTemplateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: rangeTemplateHtml },
    { title: 'SCSS', language: 'css', code: rangeTemplateScss },
    { title: 'TS', language: 'typescript', code: rangeTemplateTs },
  ];

  hostTemplateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hostTemplateHtml },
    { title: 'TS', language: 'typescript', code: hostTemplateTs },
  ];

  DatepickerProDemoStaticPanel: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: staticPanelHtml },
    { title: 'TS', language: 'typescript', code: staticPanelTs },
    { title: 'SCSS', language: 'css', code: staticPanelScss },
  ];

  SelectDatepickerProDemo: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: selectTypeHtml },
    { title: 'TS', language: 'typescript', code: selectTypeTs },
    { title: 'SCSS', language: 'css', code: selectTypeScss },
  ];

  DatepickerProDemoTabType: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: tabTypeHtml },
    { title: 'TS', language: 'typescript', code: tabTypeTs },
    { title: 'SCSS', language: 'css', code: tabTypeScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.datepicker-pro.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.datepicker-pro.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'date-marked', value: values['mark-type'] },
      { dAnchorLink: 'show-time', value: values['show-time'] },
      { dAnchorLink: 'template', value: values.template },
      { dAnchorLink: 'monthYear', value: values.monthYear },
      { dAnchorLink: 'range-picker', value: values.rangePicker },
      { dAnchorLink: 'range-template', value: values.rangeTemplate },
      { dAnchorLink: 'host-template', value: values['host-template'] },
      { dAnchorLink: 'datepicker-pro-static-panel', value: values['datepicker-pro-static-panel'] },
      { dAnchorLink: 'select-type', value: values['select-type'] },
      { dAnchorLink: 'datepicker-pro-tab-type', value: values['tab-typeDemo'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
