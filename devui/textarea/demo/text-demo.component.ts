import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import resizeHtml from './resize/resize.component.html?raw';
import resizeTs from './resize/resize.component.ts.txt?raw';
import countHtml from './count/count.component.html?raw';
import countTs from './count/count.component.ts.txt?raw';

@Component({
  templateUrl: './text-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TextDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  resizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: resizeHtml },
    { title: 'TS', language: 'typescript', code: resizeTs },
  ];
  countSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: countHtml },
    { title: 'TS', language: 'typescript', code: countTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.textarea.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.textarea.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'resize', value: values.resize },
      { dAnchorLink: 'count', value: values.count },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
