import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/with-source.component.html?raw';
import basicTs from './basic/with-source.component.ts.txt?raw';
import objectHtml from './object/object-source.component.html?raw';
import objectTs from './object/object-source.component.ts.txt?raw';
import searchFunctionHtml from './search-function/with-search-function.component.html?raw';
import searchFunctionTs from './search-function/with-search-function.component.ts.txt?raw';
import disableDataHtml from './disable-data/disable-data-with-source.component.html?raw';
import disableDataTs from './disable-data/disable-data-with-source.component.ts.txt?raw';
import asyncDataFunctionHtml from './async-data-function/async-data-with-function.component.html?raw';
import asyncDataFunctionTs from './async-data-function/async-data-with-function.component.ts.txt?raw';
import lazyLoadHtml from './lazy-load/lazy-load.component.html?raw';
import lazyLoadTs from './lazy-load/lazy-load.component.ts.txt?raw';
import customAreaHtml from './custom-area/custom-area.component.html?raw';
import customAreaTs from './custom-area/custom-area.component.ts.txt?raw';
import customAreaScss from './custom-area/custom-area.component.scss?raw';

@Component({
  selector: 'd-editable-select-demo',
  templateUrl: './editable-select-demo.component.html',
  styleUrls: ['./editable-select-demo.component.scss'],
  standalone: false
})
export class EditableSelectDemoComponent implements OnInit, OnDestroy {
  BasicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  ObjectSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: objectHtml },
    { title: 'TS', language: 'typescript', code: objectTs },
  ];
  SearchFnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: searchFunctionHtml },
    { title: 'TS', language: 'typescript', code: searchFunctionTs },
  ];
  DisableDataSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disableDataHtml },
    { title: 'TS', language: 'typescript', code: disableDataTs },
  ];
  AsyncDataSearchFnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: asyncDataFunctionHtml },
    { title: 'TS', language: 'typescript', code: asyncDataFunctionTs },
  ];
  LazyLoadComponentSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: lazyLoadHtml },
    { title: 'TS', language: 'typescript', code: lazyLoadTs },
  ];
  customAreaSourceData: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customAreaHtml },
    { title: 'TS', language: 'typescript', code: customAreaTs },
    { title: 'SCSS', language: 'scss', code: customAreaScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.editable-select.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );
    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.editable-select.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'object-source', value: values['object-source'] },
      { dAnchorLink: 'disable-data-with-source', value: values['disable-data-with-source'] },
      { dAnchorLink: 'with-search-function', value: values['with-search-function'] },
      { dAnchorLink: 'async-data-with-function', value: values['async-data-with-function'] },
      { dAnchorLink: 'lazy-load', value: values['lazy-load'] },
      { dAnchorLink: 'custom-area-usage', value: values['custom-area-usage'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
