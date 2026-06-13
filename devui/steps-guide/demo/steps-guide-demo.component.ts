import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import positionHtml from './position/position.component.html?raw';
import positionTs from './position/position.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import fakeDataTs from './fakeData.ts.txt?raw';

@Component({
  templateUrl: './steps-guide-demo.component.html',
  standalone: false
})
export class StepsGuideDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'DATA', language: 'typescript', code: fakeDataTs },
  ];

  positionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: positionHtml },
    { title: 'TS', language: 'typescript', code: positionTs },
    { title: 'DATA', language: 'typescript', code: fakeDataTs },
  ];

  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
    { title: 'DATA', language: 'typescript', code: fakeDataTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.steps-guide.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.steps-guide.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'position', value: values.position },
      { dAnchorLink: 'custom', value: values.custom },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
