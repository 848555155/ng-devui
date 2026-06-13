import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import multiReadtipHtml from './multi-readtip/multi-readtip.component.html?raw';
import multiReadtipTs from './multi-readtip/multi-readtip.component.ts.txt?raw';
import multiReadtipScss from './multi-readtip/multi-readtip.component.scss?raw';
import readtipTemplateHtml from './readtip-template/readtip-template.component.html?raw';
import readtipTemplateTs from './readtip-template/readtip-template.component.ts.txt?raw';
import readtipTemplateScss from './readtip-template/readtip-template.component.scss?raw';
import asyncReadtipHtml from './async-readtip/readtip-async.component.html?raw';
import asyncReadtipTs from './async-readtip/readtip-async.component.ts.txt?raw';
import asyncReadtipScss from './async-readtip/readtip-async.component.scss?raw';

@Component({
  selector: 'd-read-tip-demo',
  standalone: false,
  templateUrl: './read-tip-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ReadTipDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  multiSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiReadtipHtml },
    { title: 'TS', language: 'typescript', code: multiReadtipTs },
    { title: 'SCSS', language: 'css', code: multiReadtipScss },
  ];

  templateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: readtipTemplateHtml },
    { title: 'TS', language: 'typescript', code: readtipTemplateTs },
    { title: 'SCSS', language: 'css', code: readtipTemplateScss },
  ];

  asyncSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: asyncReadtipHtml },
    { title: 'TS', language: 'typescript', code: asyncReadtipTs },
    { title: 'SCSS', language: 'css', code: asyncReadtipScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.read-tip.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.read-tip.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic', value: values['basic-usage'] },
      { dAnchorLink: 'multi-readtip', value: values['multi-usage'] },
      { dAnchorLink: 'readtip-template', value: values['template-usage'] },
      { dAnchorLink: 'readtip-async', value: values['async-usage'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
