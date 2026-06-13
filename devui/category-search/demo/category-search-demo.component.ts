import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import extendHtml from './extend/extend.component.html?raw';
import extendTs from './extend/extend.component.ts.txt?raw';
import extendScss from './extend/extend.component.scss?raw';
import autoScrollHtml from './auto-scroll/auto-scroll.component.html?raw';
import autoScrollTs from './auto-scroll/auto-scroll.component.ts.txt?raw';
import demoDataTs from './demo-data.ts.txt?raw';

@Component({
  selector: 'd-category-search-demo',
  standalone: false,
  templateUrl: './category-search-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CategorySearchDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: basicHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: basicTs,
    },
    {
      title: 'DATA',
      language: 'typescript',
      code: demoDataTs,
    },
  ];
  extendSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: extendHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: extendTs,
    },
    {
      title: 'DATA',
      language: 'typescript',
      code: demoDataTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: extendScss,
    },
  ];
  autoScrollSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: autoScrollHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: autoScrollTs,
    },
    {
      title: 'DATA',
      language: 'typescript',
      code: demoDataTs,
    },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.subs.add(
      this.translate.get('components.category-search.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );
    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.category-search.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values.basicDemo },
      { dAnchorLink: 'extend-template', value: values.extendDemo },
      { dAnchorLink: 'auto-scroll', value: values.autoScrollDemo },
    ];
  }
}
