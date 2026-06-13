import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';
import hideHtml from './hide/hide.component.html?raw';
import hideTs from './hide/hide.component.ts.txt?raw';
@Component({
  selector: 'd-demo-tags',
  standalone: false,
  templateUrl: './tags-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TagsDemoComponent implements OnDestroy, OnInit {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
    { title: 'SCSS', language: 'css', code: customScss },
  ];

  hideSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hideHtml },
    { title: 'TS', language: 'typescript', code: hideTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tags.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tags.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'single-tag', value: values['single-tag'] },
      { dAnchorLink: 'tags-group', value: values['tags-group'] },
      { dAnchorLink: 'hide-tags', value: values['hide-tags'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
