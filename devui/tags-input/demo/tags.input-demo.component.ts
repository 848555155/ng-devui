import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import asyncHtml from './async/async.component.html?raw';
import asyncTs from './async/async.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import virtualScrollHtml from './virtual-scroll/virtual-scroll.component.html?raw';
import virtualScrollTs from './virtual-scroll/virtual-scroll.component.ts.txt?raw';
@Component({
  selector: 'd-demo-basic',
  standalone: false,
  templateUrl: './tags.input-demo.component.html',
  styles: `
      :host ::ng-deep pre {
        margin: 8px 0;
        border: none;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TagsInputDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  asyncSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: asyncHtml },
    { title: 'TS', language: 'typescript', code: asyncTs },
  ];

  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
  ];

  virtualScrollSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: virtualScrollHtml },
    { title: 'TS', language: 'typescript', code: virtualScrollTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tags-input.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tags-input.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'customize', value: values.customize },
      { dAnchorLink: 'async-input', value: values['async-input'] },
      { dAnchorLink: 'virtual-scroll', value: values['virtual-scroll'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
