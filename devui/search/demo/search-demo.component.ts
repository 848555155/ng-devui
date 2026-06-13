import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import iconLeftHtml from './icon-left/icon-left.component.html?raw';
import iconLeftTs from './icon-left/icon-left.component.ts.txt?raw';
import ngmodelHtml from './ngmodel/ngmodel.component.html?raw';
import ngmodelTs from './ngmodel/ngmodel.component.ts.txt?raw';
import ngmodelCss from './ngmodel/ngmodel.component.css?raw';
import autoFocusHtml from './auto-focus/auto-focus.component.html?raw';
import autoFocusTs from './auto-focus/auto-focus.component.ts.txt?raw';
import noBorderHtml from './no-border/search-no-border.component.html?raw';
import noBorderTs from './no-border/search-no-border.component.ts.txt?raw';
import noBorderScss from './no-border/search-no-border.component.scss?raw';
@Component({
  selector: 'd-demo-search',
  standalone: false,
  templateUrl: './search-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SearchDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];

  iconLeftSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: iconLeftHtml },
    { title: 'TS', language: 'typescript', code: iconLeftTs },
  ];

  ngmodelDemoSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: ngmodelHtml },
    { title: 'TS', language: 'typescript', code: ngmodelTs },
    { title: 'SCSS', language: 'css', code: ngmodelCss },
  ];

  autoFocusDemoSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: autoFocusHtml },
    { title: 'TS', language: 'typescript', code: autoFocusTs },
  ];

  searchDemoNoBorder: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: noBorderHtml },
    { title: 'TS', language: 'typescript', code: noBorderTs },
    { title: 'SCSS', language: 'css', code: noBorderScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.search.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.search.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'icon-left', value: values['icon-left'] },
      { dAnchorLink: 'search-no-border', value: values['search-no-border'] },
      { dAnchorLink: 'bidirectional-binding', value: values['bidirectional-binding'] },
      { dAnchorLink: 'auto-focus', value: values['auto-focus'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
