import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import formatHtml from './format/format.component.html?raw';
import formatTs from './format/format.component.ts.txt?raw';
import formatScss from './format/format.component.scss?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';

@Component({
  standalone: false,
  templateUrl: './time-picker-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TimePickerDemoComponent implements OnInit, OnDestroy {
  TimePickerDemoBasicComponent: DevuiSourceData[] = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SASS', language: 'css', code: basicScss },
  ];
  TimePickerDemoFormatComponent: DevuiSourceData[] = [
    { title: 'HTML', language: 'xml', code: formatHtml },
    { title: 'TS', language: 'typescript', code: formatTs },
    { title: 'SASS', language: 'css', code: formatScss },
  ];
  TimePickerDemoCustomComponent: DevuiSourceData[] = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
    { title: 'SASS', language: 'css', code: customScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.time-picker.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.time-picker.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'format', value: values.format },
      { dAnchorLink: 'custom', value: values.custom },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
