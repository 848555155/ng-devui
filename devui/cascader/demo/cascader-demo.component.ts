import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import multipleCascaderHtml from './multiple-cascader/multiple-cascader.component.html?raw';
import multipleCascaderTs from './multiple-cascader/multiple-cascader.component.ts.txt?raw';
import searchCascaderHtml from './search-cascader/search-cascader.component.html?raw';
import searchCascaderTs from './search-cascader/search-cascader.component.ts.txt?raw';
import templateCascaderHtml from './template-cascader/template-cascader.component.html?raw';
import templateCascaderTs from './template-cascader/template-cascader.component.ts.txt?raw';
import lazyloadCascaderHtml from './lazyload-cascader/lazyload-cascader.component.html?raw';
import lazyloadCascaderTs from './lazyload-cascader/lazyload-cascader.component.ts.txt?raw';
import parentSelectCascaderHtml from './parent-select-cascader/parent-select-cascader.component.html?raw';
import parentSelectCascaderTs from './parent-select-cascader/parent-select-cascader.component.ts.txt?raw';
import headerTemplateHtml from './header-template/cascader-header-template.component.html?raw';
import headerTemplateTs from './header-template/cascader-header-template.component.ts.txt?raw';
import headerTemplateScss from './header-template/cascader-header-template.component.scss?raw';

@Component({
  selector: 'd-demo-cascader',
  templateUrl: './cascader-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CascaderDemoComponent implements OnInit, OnDestroy {
  cascaderBasicComponent = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  cascaderMultipleComponent = [
    { title: 'HTML', language: 'html', code: multipleCascaderHtml },
    { title: 'TS', language: 'typescript', code: multipleCascaderTs },
  ];

  cascaderSearchComponent = [
    { title: 'HTML', language: 'html', code: searchCascaderHtml },
    { title: 'TS', language: 'typescript', code: searchCascaderTs },
  ];

  cascaderTempComponent = [
    { title: 'HTML', language: 'html', code: templateCascaderHtml },
    { title: 'TS', language: 'typescript', code: templateCascaderTs },
  ];

  cascaderLazyloadComponent = [
    { title: 'HTML', language: 'html', code: lazyloadCascaderHtml },
    { title: 'TS', language: 'typescript', code: lazyloadCascaderTs },
  ];

  cascaderParentSelectComponent = [
    { title: 'HTML', language: 'html', code: parentSelectCascaderHtml },
    { title: 'TS', language: 'typescript', code: parentSelectCascaderTs },
  ];

  CascaderDemoHeaderTemplate: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: headerTemplateHtml },
    { title: 'TS', language: 'typescript', code: headerTemplateTs },
    { title: 'SCSS', language: 'css', code: headerTemplateScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.cascader.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.cascader.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'multiple-cascader', value: values['multiple-cascader'] },
      { dAnchorLink: 'search-cascader', value: values['search-cascader'] },
      { dAnchorLink: 'parent-cascader', value: values['parent-cascader'] },
      { dAnchorLink: 'template-cascader', value: values['template-cascader'] },
      { dAnchorLink: 'lazyload-cascader', value: values['lazyload-cascader'] },
      { dAnchorLink: 'cascader-header-template', value: values['cascader-header-template'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
