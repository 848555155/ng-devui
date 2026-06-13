import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import additionalHtml from './additional/additional.component.html?raw';
import additionalTs from './additional/additional.component.ts.txt?raw';
import additionalCss from './additional/additional.component.css?raw';
import liteHtml from './lite/lite.component.html?raw';
import liteTs from './lite/lite.component.ts.txt?raw';
import liteScss from './lite/lite.component.scss?raw';
import widgetsHtml from './widgets/widgets.component.html?raw';
import widgetsTs from './widgets/widgets.component.ts.txt?raw';
@Component({
  selector: 'd-demo-pagination',
  standalone: false,
  templateUrl: './pagination-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class PaginationDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  additionalSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: additionalHtml },
    { title: 'TS', language: 'typescript', code: additionalTs },
    { title: 'SCSS', language: 'css', code: additionalCss },
  ];
  liteSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: liteHtml },
    { title: 'TS', language: 'typescript', code: liteTs },
    { title: 'SCSS', language: 'css', code: liteScss },
  ];
  widgetsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: widgetsHtml },
    { title: 'TS', language: 'typescript', code: widgetsTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.pagination.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.pagination.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'minimalist-model', value: values['minimalist-model'] },
      { dAnchorLink: 'multiple-configurations', value: values['multiple-configurations'] },
      { dAnchorLink: 'exceptional-case', value: values['exceptional-case'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
