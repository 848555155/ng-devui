import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import scrollContainerHtml from './scroll-container/scroll-container.component.html?raw';
import scrollContainerTs from './scroll-container/scroll-container.component.ts.txt?raw';
import scrollContainerScss from './scroll-container/scroll-container.component.scss?raw';
@Component({
  selector: 'd-nav-sprite-demo',
  standalone: false,
  templateUrl: './nav-sprite-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class NavSpriteDemoComponent implements OnInit, OnDestroy {
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
      title: 'SCSS',
      language: 'css',
      code: basicScss,
    },
  ];
  scrollSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: scrollContainerHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: scrollContainerTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: scrollContainerScss,
    },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.subs.add(
      this.translate.get('components.nav-sprite.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );
    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.nav-sprite.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }
  setNavValues(values) {
    this.navItems = [
      {
        dAnchorLink: 'basic',
        value: values['basic-usage'],
      },
      {
        dAnchorLink: 'scroll',
        value: values['scroll-usage'],
      },
    ];
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
