import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import customOpenHtml from './custom-open/custom-open.component.html?raw';
import customOpenTs from './custom-open/custom-open.component.ts.txt?raw';
import zIndexHtml from './z-index/z-index.component.html?raw';
import zIndexTs from './z-index/z-index.component.ts.txt?raw';

@Component({
  selector: 'd-image-preview-demo',
  templateUrl: './image-preview-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DImagePreviewDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  customOpen: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customOpenHtml },
    { title: 'TS', language: 'typescript', code: customOpenTs },
  ];
  zIndexSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: zIndexHtml },
    { title: 'TS', language: 'typescript', code: zIndexTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.ImagePreview.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.ImagePreview.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'custom-usage', value: values['custom-usage'] },
      { dAnchorLink: 'z-index-usage', value: values['z-index-usage'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
