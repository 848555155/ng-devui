import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import scrollTargetHtml from './scroll-target/scroll-target.component.html?raw';
import scrollTargetTs from './scroll-target/scroll-target.component.ts.txt?raw';
import scrollTargetScss from './scroll-target/scroll-target.component.scss?raw';

@Component({
  selector: 'd-demo-sticky',
  templateUrl: './sticky-demo.component.html',
  standalone: false
})
export class StickyDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  ScrollTargetSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: scrollTargetHtml },
    { title: 'TS', language: 'typescript', code: scrollTargetTs },
    { title: 'SCSS', language: 'css', code: scrollTargetScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.sticky.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.sticky.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'scroll-target', value: values['scroll-target'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
