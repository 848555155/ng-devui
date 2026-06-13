import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import passwordVisibleHtml from './password-visible/password-visible.component.html?raw';
import passwordVisibleTs from './password-visible/password-visible.component.ts.txt?raw';
import passwordVisibleScss from './password-visible/password-visible.component.scss?raw';
import sizeHtml from './size/text-input-size.component.html?raw';
import sizeTs from './size/text-input-size.component.ts.txt?raw';
@Component({
  templateUrl: './text-input-demo.component.html',
  standalone: false
})
export class TextInputDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  passwordVisibleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: passwordVisibleHtml },
    { title: 'TS', language: 'typescript', code: passwordVisibleTs },
    { title: 'SCSS', language: 'css', code: passwordVisibleScss },
  ];

  sizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: sizeHtml },
    { title: 'TS', language: 'typescript', code: sizeTs },
  ];
  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.text-input.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.text-input.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'size', value: values.size },
      {
        dAnchorLink: 'password-input',
        value: values['password-input'],
      },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
