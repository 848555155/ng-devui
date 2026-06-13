import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import twoBindingHtml from './two-binding/two-binding.component.html?raw';
import twoBindingTs from './two-binding/two-binding.component.ts.txt?raw';
import callbackHtml from './callback/callback.component.html?raw';
import callbackTs from './callback/callback.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';

@Component({
  templateUrl: './toggle-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ToggleDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];
  twoBindingSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: twoBindingHtml },
    { title: 'TS', language: 'typescript', code: twoBindingTs },
  ];
  callbackSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: callbackHtml },
    { title: 'TS', language: 'typescript', code: callbackTs },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customHtml },
    { title: 'TS', language: 'typescript', code: customTs },
    { title: 'SCSS', language: 'css', code: customScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.toggle.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.toggle.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'two-binding', value: values['two-binding'] },
      { dAnchorLink: 'callback', value: values.callback },
      { dAnchorLink: 'custom', value: values.custom },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
