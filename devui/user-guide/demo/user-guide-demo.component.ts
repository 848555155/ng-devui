import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import serviceWayHtml from './service-way/service-way.component.html?raw';
import serviceWayTs from './service-way/service-way.component.ts.txt?raw';
import serviceWayScss from './service-way/service-way.component.scss?raw';

import mockStepsTs from './mock-steps.ts.txt?raw';

@Component({
  selector: 'd-user-guide-demo',
  templateUrl: './user-guide-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserGuideDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'DATA', language: 'typescript', code: mockStepsTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  serviceWaySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: serviceWayHtml },
    { title: 'TS', language: 'typescript', code: serviceWayTs },
    { title: 'DATA', language: 'typescript', code: mockStepsTs },
    { title: 'SCSS', language: 'css', code: serviceWayScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.user-guide.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.user-guide.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'user-guide-basic', value: values['user-guide-basic'] },
      { dAnchorLink: 'user-guide-service-way', value: values['user-guide-service-way'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
