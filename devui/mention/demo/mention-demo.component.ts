import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import asyncHtml from './async/async.component.html?raw';
import asyncTs from './async/async.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';
import prefixHtml from './prefix/prefix.component.html?raw';
import prefixTs from './prefix/prefix.component.ts.txt?raw';
import toggleHtml from './toggle/toggle.component.html?raw';
import toggleTs from './toggle/toggle.component.ts.txt?raw';

@Component({
  selector: 'd-mention-demo',
  templateUrl: './mention-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MentionDemoComponent implements OnInit, OnDestroy {
  navItems = [];
  subs: Subscription = new Subscription();
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  asyncSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: asyncHtml },
    { title: 'TS', language: 'typescript', code: asyncTs },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
    { title: 'CSS', language: 'css', code: customScss },
  ];
  prefixSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: prefixHtml },
    { title: 'TS', language: 'typescript', code: prefixTs },
  ];
  toggleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: toggleHtml },
    { title: 'TS', language: 'typescript', code: toggleTs },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.mention.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.mention.anchorLinkValues');
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
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'async-usage', value: values['async-usage'] },
      { dAnchorLink: 'custom-prefix', value: values['custom-prefix'] },
      { dAnchorLink: 'custom-template', value: values['custom-template'] },
      { dAnchorLink: 'use-separator', value: values['use-separator'] },
    ];
  }
}
