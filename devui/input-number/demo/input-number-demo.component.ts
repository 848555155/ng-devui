import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/input-number-basic.component.html?raw';
import basicTs from './basic/input-number-basic.component.ts.txt?raw';
import basicCss from './basic/input-number-basic.component.css?raw';
import disabledHtml from './disabled/input-number-disabled.component.html?raw';
import disabledTs from './disabled/input-number-disabled.component.ts.txt?raw';
import disabledCss from './disabled/input-number-disabled.component.css?raw';
import emptyHtml from './empty/input-number-empty.component.html?raw';
import emptyTs from './empty/input-number-empty.component.ts.txt?raw';
import emptyCss from './empty/input-number-empty.component.css?raw';
import placeholderAndMaxLengthHtml from './placeholderAndMaxLength/input-number-placeholder-maxLength.component.html?raw';
import placeholderAndMaxLengthTs from './placeholderAndMaxLength/input-number-placeholder-maxLength.component.ts.txt?raw';
import placeholderAndMaxLengthCss from './placeholderAndMaxLength/input-number-placeholder-maxLength.component.css?raw';
import regHtml from './reg/input-number-reg.component.html?raw';
import regTs from './reg/input-number-reg.component.ts.txt?raw';
import regCss from './reg/input-number-reg.component.css?raw';
import decimalLimitHtml from './decimalLimit/decimal-limit.component.html?raw';
import decimalLimitTs from './decimalLimit/decimal-limit.component.ts.txt?raw';
import decimalLimitCss from './decimalLimit/decimal-limit.component.css?raw';
@Component({
  selector: 'd-demo-input-number',
  standalone: false,
  templateUrl: './input-number-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberDemoComponent implements OnInit, OnDestroy {
  InputNumberBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];

  InputNumberDisabled: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
    { title: 'SCSS', language: 'css', code: disabledCss },
  ];

  InputNumberEmpty: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: emptyHtml },
    { title: 'TS', language: 'typescript', code: emptyTs },
    { title: 'SCSS', language: 'css', code: emptyCss },
  ];

  InputNumberPlaceholderAndMaxLengthComponent: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: placeholderAndMaxLengthHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: placeholderAndMaxLengthTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: placeholderAndMaxLengthCss,
    },
  ];

  InputNumberReg: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: regHtml },
    { title: 'TS', language: 'typescript', code: regTs },
    { title: 'SCSS', language: 'css', code: regCss },
  ];

  DecimalLimit: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: decimalLimitHtml },
    { title: 'TS', language: 'typescript', code: decimalLimitTs },
    { title: 'SCSS', language: 'css', code: decimalLimitCss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.input-number.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.input-number.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'number-basic', value: values['number-basic'] },
      { dAnchorLink: 'number-disabled', value: values['number-disabled'] },
      { dAnchorLink: 'number-empty', value: values['number-empty'] },
      { dAnchorLink: 'number-placeholder-maxlength', value: values['number-placeholder-maxlength'] },
      { dAnchorLink: 'number-reg', value: values['number-reg'] },
      { dAnchorLink: 'decimal-limit', value: values['decimal-limit'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
