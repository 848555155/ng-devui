import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import setModeHtml from './set-mode/set-mode.component.html?raw';
import setModeTs from './set-mode/set-mode.component.ts.txt?raw';
import setModeScss from './set-mode/set-mode.component.scss?raw';
import minMaxHtml from './min-max/min-max.component.html?raw';
import minMaxTs from './min-max/min-max.component.ts.txt?raw';
import minMaxScss from './min-max/min-max.component.scss?raw';
import appendToBodyHtml from './append-to-body/append-to-body.component.html?raw';
import appendToBodyTs from './append-to-body/append-to-body.component.ts.txt?raw';
import appendToBodyScss from './append-to-body/append-to-body.component.scss?raw';
import rangeHtml from './range/datepicker-range.component.html?raw';
import rangeTs from './range/datepicker-range.component.ts.txt?raw';
import rangeScss from './range/datepicker-range.component.scss?raw';
import formatHtml from './format/datepicker-format.component.html?raw';
import formatTs from './format/datepicker-format.component.ts.txt?raw';
import formatScss from './format/datepicker-format.component.scss?raw';
import rangePickerBasicHtml from './range-picker-basic/date-range-picker-basic.component.html?raw';
import rangePickerBasicTs from './range-picker-basic/date-range-picker-basic.component.ts.txt?raw';
import rangePickerBasicScss from './range-picker-basic/date-range-picker-basic.component.scss?raw';
import rangePickerFormatHtml from './range-picker-format/date-range-picker-format.component.html?raw';
import rangePickerFormatTs from './range-picker-format/date-range-picker-format.component.ts.txt?raw';
import rangePickerFormatScss from './range-picker-format/date-range-picker-format.component.scss?raw';
import rangePickerDisabledHtml from './range-picker-disabled/date-range-picker-disabled.component.html?raw';
import rangePickerDisabledTs from './range-picker-disabled/date-range-picker-disabled.component.ts.txt?raw';
import rangePickerDisabledScss from './range-picker-disabled/date-range-picker-disabled.component.scss?raw';
import rangePickerRestrictedRangeHtml from './range-picker-restricted-range/date-range-picker-restricted-range.component.html?raw';
import rangePickerRestrictedRangeTs from './range-picker-restricted-range/date-range-picker-restricted-range.component.ts.txt?raw';
import rangePickerRestrictedRangeScss from './range-picker-restricted-range/date-range-picker-restricted-range.component.scss?raw';
import rangePickerTimeHtml from './range-picker-time/date-range-picker-time.component.html?raw';
import rangePickerTimeTs from './range-picker-time/date-range-picker-time.component.ts.txt?raw';
import rangePickerTimeScss from './range-picker-time/date-range-picker-time.component.scss?raw';
import rangeClearButtonHtml from './range-clear-button/range-clear-button.component.html?raw';
import rangeClearButtonTs from './range-clear-button/range-clear-button.component.ts.txt?raw';
import rangeClearButtonScss from './range-clear-button/range-clear-button.component.scss?raw';
import rangeTodayHtml from './range-today/range-today.component.html?raw';
import rangeTodayTs from './range-today/range-today.component.ts.txt?raw';
import rangeTodayScss from './range-today/range-today.component.scss?raw';
import customViewTemplateHtml from './custom-view-template/custom-view-template.component.html?raw';
import customViewTemplateTs from './custom-view-template/custom-view-template.component.ts.txt?raw';
import customViewTemplateScss from './custom-view-template/custom-view-template.component.scss?raw';
import clearButtonHtml from './clear-button/clear-button.component.html?raw';
import clearButtonTs from './clear-button/clear-button.component.ts.txt?raw';
import clearButtonScss from './clear-button/clear-button.component.scss?raw';
import buttonHtml from './button/button.component.html?raw';
import buttonTs from './button/button.component.ts.txt?raw';
import buttonCss from './button/button.component.css?raw';
import twoDatepickerBasicHtml from './two-datepicker-basic/two-datepicker-basic.component.html?raw';
import twoDatepickerBasicTs from './two-datepicker-basic/two-datepicker-basic.component.ts.txt?raw';
import twoDatepickerBasicScss from './two-datepicker-basic/two-datepicker-basic.component.scss?raw';
import twoDatepickerFormatHtml from './two-datepicker-format/two-datepicker-format.component.html?raw';
import twoDatepickerFormatTs from './two-datepicker-format/two-datepicker-format.component.ts.txt?raw';
import twoDatepickerFormatScss from './two-datepicker-format/two-datepicker-format.component.scss?raw';

@Component({
  selector: 'd-datepicker-demo',
  standalone: false,
  templateUrl: './datepicker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DatepickerDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  setModeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: setModeHtml },
    { title: 'TS', language: 'typescript', code: setModeTs },
    { title: 'SCSS', language: 'css', code: setModeScss },
  ];
  minMaxSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: minMaxHtml },
    { title: 'TS', language: 'typescript', code: minMaxTs },
    { title: 'SCSS', language: 'css', code: minMaxScss },
  ];
  appendToBodySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: appendToBodyHtml },
    { title: 'TS', language: 'typescript', code: appendToBodyTs },
    { title: 'SCSS', language: 'css', code: appendToBodyScss },
  ];
  rangeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: rangeHtml },
    { title: 'TS', language: 'typescript', code: rangeTs },
    { title: 'SCSS', language: 'css', code: rangeScss },
  ];
  formatSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: formatHtml },
    { title: 'TS', language: 'typescript', code: formatTs },
    { title: 'SCSS', language: 'css', code: formatScss },
  ];
  rangePickerSource = [
    {
      title: 'HTML',
      language: 'html',
      code: rangePickerBasicHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: rangePickerBasicTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: rangePickerBasicScss,
    },
  ];
  rangePickerFormat = [
    {
      title: 'HTML',
      language: 'html',
      code: rangePickerFormatHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: rangePickerFormatTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: rangePickerFormatScss,
    },
  ];
  rangePickerDisabled = [
    {
      title: 'HTML',
      language: 'html',
      code: rangePickerDisabledHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: rangePickerDisabledTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: rangePickerDisabledScss,
    },
  ];
  rangePickerRestricted = [
    {
      title: 'HTML',
      language: 'html',
      code: rangePickerRestrictedRangeHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: rangePickerRestrictedRangeTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: rangePickerRestrictedRangeScss,
    },
  ];
  rangePickerTime = [
    {
      title: 'HTML',
      language: 'html',
      code: rangePickerTimeHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: rangePickerTimeTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: rangePickerTimeScss,
    },
  ];
  rangeClearButtonSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: rangeClearButtonHtml },
    { title: 'TS', language: 'typescript', code: rangeClearButtonTs },
    { title: 'SCSS', language: 'css', code: rangeClearButtonScss },
  ];
  rangeTodaySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: rangeTodayHtml },
    { title: 'TS', language: 'typescript', code: rangeTodayTs },
    { title: 'SCSS', language: 'css', code: rangeTodayScss },
  ];
  customViewTemplateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: customViewTemplateHtml },
    { title: 'TS', language: 'typescript', code: customViewTemplateTs },
    { title: 'SCSS', language: 'css', code: customViewTemplateScss },
  ];
  clearButtonSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: clearButtonHtml },
    { title: 'TS', language: 'typescript', code: clearButtonTs },
    { title: 'SCSS', language: 'css', code: clearButtonScss },
  ];
  buttonSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: buttonHtml },
    { title: 'TS', language: 'typescript', code: buttonTs },
    { title: 'SCSS', language: 'css', code: buttonCss },
  ];
  twoDatepickerBasic = [
    {
      title: 'HTML',
      language: 'html',
      code: twoDatepickerBasicHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: twoDatepickerBasicTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: twoDatepickerBasicScss,
    },
  ];
  twoDatepickerFormat = [
    {
      title: 'HTML',
      language: 'html',
      code: twoDatepickerFormatHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: twoDatepickerFormatTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: twoDatepickerFormatScss,
    },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.datepicker.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.datepicker.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'datepicker-default', value: values['datepicker-default'] },
      { dAnchorLink: 'datepicker-set-mode', value: values['datepicker-set-mode'] },
      { dAnchorLink: 'datepicker-min-max', value: values['datepicker-min-max'] },
      { dAnchorLink: 'datepicker-append-to-body', value: values['datepicker-append-to-body'] },
      { dAnchorLink: 'datepicker-range', value: values['datepicker-range'] },
      { dAnchorLink: 'datepicker-range-basic', value: values['datepicker-range-basic'] },
      { dAnchorLink: 'datepicker-range-format', value: values['datepicker-range-format'] },
      { dAnchorLink: 'datepicker-range-disabled', value: values['datepicker-range-disabled'] },
      { dAnchorLink: 'datepicker-range-restricted-range', value: values['datepicker-range-restricted-range'] },
      { dAnchorLink: 'datepicker-range-time', value: values['datepicker-range-time'] },
      { dAnchorLink: 'datepicker-clear-button', value: values['datepicker-clear-button'] },
      { dAnchorLink: 'datepicker-range-today', value: values['datepicker-range-today'] },
      { dAnchorLink: 'datepicker-format', value: values['datepicker-format'] },
      { dAnchorLink: 'custom-view-template', value: values['custom-view-template'] },
      { dAnchorLink: 'date-picker-clear-button', value: values['date-picker-clear-button'] },
      { dAnchorLink: 'date-picker-button', value: values['date-picker-button'] },
      { dAnchorLink: 'two-date-picker-basic', value: values['two-date-picker-basic'] },
      { dAnchorLink: 'two-date-picker-format', value: values['two-date-picker-format'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
