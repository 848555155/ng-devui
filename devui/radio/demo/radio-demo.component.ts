import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import disabledHtml from './disabled/disabled.component.html?raw';
import disabledTs from './disabled/disabled.component.ts.txt?raw';
import horizontalHtml from './horizontal/horizontal.component.html?raw';
import horizontalTs from './horizontal/horizontal.component.ts.txt?raw';
import verticalHtml from './vertical/vertical.component.html?raw';
import verticalTs from './vertical/vertical.component.ts.txt?raw';
import conditionChangeHtml from './condition-change/condition-change.component.html?raw';
import conditionChangeTs from './condition-change/condition-change.component.ts.txt?raw';
import conditionRadioGroupHtml from './condition-radio-group/condition-radio-group.component.html?raw';
import conditionRadioGroupTs from './condition-radio-group/condition-radio-group.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';

@Component({
  selector: 'd-demo-radio',
  templateUrl: './radio-demo.component.html',
  standalone: false
})
export class RadioDemoComponent implements OnInit, OnDestroy {
  navItems = [];
  subs: Subscription = new Subscription();
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  disabledSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
  ];
  horizontalSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: horizontalHtml },
    { title: 'TS', language: 'typescript', code: horizontalTs },
  ];
  verticalSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: verticalHtml },
    { title: 'TS', language: 'typescript', code: verticalTs },
  ];
  conditionChangeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: conditionChangeHtml },
    { title: 'TS', language: 'typescript', code: conditionChangeTs },
  ];
  conditionChangeGroupSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: conditionRadioGroupHtml },
    { title: 'TS', language: 'typescript', code: conditionRadioGroupTs },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subs.add(
      this.translate.get('components.radio.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );
    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.radio.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  setNavValues(values: any): void {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'disabled', value: values.disabled },
      { dAnchorLink: 'condition-change', value: values['condition-change'] },
      { dAnchorLink: 'condition-radio-group', value: values['condition-radio-group'] },
      { dAnchorLink: 'horizontal', value: values.horizontal },
      { dAnchorLink: 'vertical', value: values.vertical },
      { dAnchorLink: 'custom', value: values.custom },
    ];
  }
}
