import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import onlyreadHtml from './onlyread/onlyread.component.html?raw';
import onlyreadTs from './onlyread/onlyread.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import typeHtml from './type/type.component.html?raw';
import typeTs from './type/type.component.ts.txt?raw';
import halfHtml from './half/rate-half.component.html?raw';
import halfTs from './half/rate-half.component.ts.txt?raw';
import halfScss from './half/rate-half.component.scss?raw';
import clearHtml from './clear/rate-clear.component.html?raw';
import clearTs from './clear/rate-clear.component.ts.txt?raw';
import clearScss from './clear/rate-clear.component.scss?raw';
import templateHtml from './template/template.component.html?raw';
import templateTs from './template/template.component.ts.txt?raw';

@Component({
  selector: 'd-demo-rate',
  templateUrl: './rate-demo.component.html',
  styleUrls: ['./rate-demo.component.css'],
  standalone: false
})
export class RateDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  onlyreadSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: onlyreadHtml },
    { title: 'TS', language: 'typescript', code: onlyreadTs },
  ];

  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
  ];
  TypeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: typeHtml },
    { title: 'TS', language: 'typescript', code: typeTs },
  ];

  halfSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: halfHtml },
    { title: 'TS', language: 'typescript', code: halfTs },
    { title: 'SCSS', language: 'css', code: halfScss },
  ];

  clearSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: clearHtml },
    { title: 'TS', language: 'typescript', code: clearTs },
    { title: 'SCSS', language: 'css', code: clearScss },
  ];

  TemplateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: templateHtml },
    { title: 'TS', language: 'typescript', code: templateTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.rate.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.rate.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'read-only-mode', value: values['read-only-mode'] },
      { dAnchorLink: 'dynamic-mode', value: values['dynamic-mode'] },
      { dAnchorLink: 'dynamic-mode-Custom', value: values['dynamic-mode-Custom'] },
      { dAnchorLink: 'half-demo', value: values['half-demo'] },
      { dAnchorLink: 'clear-demo', value: values['clear-demo'] },
      { dAnchorLink: 'using-the-type-parameter', value: values['using-the-type-parameter'] },
      { dAnchorLink: 'template', value: values.template },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
