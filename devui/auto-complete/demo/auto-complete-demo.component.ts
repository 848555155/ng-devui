import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/auto-complete-demo-basic.component.html?raw';
import basicTs from './basic/auto-complete-demo-basic.component.ts.txt?raw';
import arrayHtml from './array/auto-complete-demo-array.component.html?raw';
import arrayTs from './array/auto-complete-demo-array.component.ts.txt?raw';
import customHtml from './custom/auto-complete-demo-custom.component.html?raw';
import customTs from './custom/auto-complete-demo-custom.component.ts.txt?raw';
import disabledHtml from './disabled/auto-complete-demo-disable.component.html?raw';
import disabledTs from './disabled/auto-complete-demo-disable.component.ts.txt?raw';
import dropdownHtml from './dropdown/auto-complete-demo-dropdown.component.html?raw';
import dropdownTs from './dropdown/auto-complete-demo-dropdown.component.ts.txt?raw';
import objectHtml from './object/auto-complete-demo-object.component.html?raw';
import objectTs from './object/auto-complete-demo-object.component.ts.txt?raw';
import latestHtml from './latest/auto-complete-demo-latest.component.html?raw';
import latestTs from './latest/auto-complete-demo-latest.component.ts.txt?raw';
import lazyLoadHtml from './lazy-load/auto-complete-demo-lazy-load.component.html?raw';
import lazyLoadTs from './lazy-load/auto-complete-demo-lazy-load.component.ts.txt?raw';

@Component({
  selector: 'd-auto-complete-demo',
  standalone: false,
  templateUrl: './auto-complete-demo.component.html',
  styleUrl: './auto-complete-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AutoCompleteDemoComponent implements OnInit, OnDestroy {
  AutoCompleteDemoBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  AutoCompleteDemoArray: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: arrayHtml },
    { title: 'TS', language: 'typescript', code: arrayTs },
  ];

  AutoCompleteDemoCustom: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
  ];

  AutoCompleteDemoDisable: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
  ];
  AutoCompleteDemoDropdown: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dropdownHtml },
    { title: 'TS', language: 'typescript', code: dropdownTs },
  ];

  AutoCompleteDemoObject: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: objectHtml },
    { title: 'TS', language: 'typescript', code: objectTs },
  ];

  AutoCompleteDemoLatest: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: latestHtml },
    { title: 'TS', language: 'typescript', code: latestTs },
  ];

  AutoCompleteDemoLazyLoad: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: lazyLoadHtml },
    { title: 'TS', language: 'typescript', code: lazyLoadTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.auto-complete.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.auto-complete.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'auto-object', value: values['auto-object'] },
      { dAnchorLink: 'auto-custom', value: values['auto-custom'] },
      { dAnchorLink: 'auto-disable', value: values['auto-disable'] },
      { dAnchorLink: 'auto-latest', value: values['auto-latest'] },
      { dAnchorLink: 'auto-lazy-load', value: values['auto-lazy-load'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
