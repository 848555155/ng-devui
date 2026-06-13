import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/transfer-demo-base.component.html?raw';
import basicTs from './basic/transfer-demo-base.component.ts.txt?raw';
import customHtml from './custom/transfer-demo-custom.component.html?raw';
import customScss from './custom/transfer-demo-custom.component.scss?raw';
import customTs from './custom/transfer-demo-custom.component.ts.txt?raw';
import searchHtml from './search/transfer-demo-search.component.html?raw';
import searchScss from './search/transfer-demo-search.component.scss?raw';
import searchTs from './search/transfer-demo-search.component.ts.txt?raw';
import sortHtml from './sort/transfer-demo-sort.component.html?raw';
import sortTs from './sort/transfer-demo-sort.component.ts.txt?raw';
import virtualScrollHtml from './virtual-scroll/transfer-virtual-scroll.component.html?raw';
import virtualScrollTs from './virtual-scroll/transfer-virtual-scroll.component.ts.txt?raw';
import virtualScrollScss from './virtual-scroll/transfer-virtual-scroll.component.scss?raw';

@Component({
  selector: 'd-transfer-demo',
  standalone: false,
  templateUrl: './transfer-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TransferDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  customSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: customHtml },
    { title: 'SCSS', language: 'css', code: customScss },
    { title: 'TS', language: 'typescript', code: customTs },
  ];
  searchSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: searchHtml },
    { title: 'SCSS', language: 'css', code: searchScss },
    { title: 'TS', language: 'typescript', code: searchTs },
  ];
  sortSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: sortHtml },
    { title: 'TS', language: 'typescript', code: sortTs },
  ];

  TransferDemoVirtualScroll: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: virtualScrollHtml },
    { title: 'TS', language: 'typescript', code: virtualScrollTs },
    { title: 'SCSS', language: 'css', code: virtualScrollScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.transfer.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.transfer.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'transfer-demo-base', value: values['transfer-demo-base'] },
      { dAnchorLink: 'transfer-demo-search', value: values['transfer-demo-search'] },
      { dAnchorLink: 'transfer-demo-sort', value: values['transfer-demo-sort'] },
      { dAnchorLink: 'transfer-demo-custom', value: values['transfer-demo-custom'] },
      { dAnchorLink: 'transfer-demo-virtual-scroll', value: values['transfer-demo-virtual-scroll'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
