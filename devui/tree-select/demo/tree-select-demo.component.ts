import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/tree-select-basic.component.html?raw';
import basicTs from './basic/tree-select-basic.component.ts.txt?raw';
import labelizationHtml from './labelization/labelization.component.html?raw';
import labelizationTs from './labelization/labelization.component.ts.txt?raw';
import leafOnlyHtml from './leaf-only/tree-select-leaf-only.component.html?raw';
import leafOnlyTs from './leaf-only/tree-select-leaf-only.component.ts.txt?raw';
import hooksHtml from './hooks/tree-select-hooks.component.html?raw';
import hooksTs from './hooks/tree-select-hooks.component.ts.txt?raw';
import searchableHtml from './searchable/tree-select-searchable.component.html?raw';
import searchableTs from './searchable/tree-select-searchable.component.ts.txt?raw';
import appendToHtml from './append-to/tree-select-append-to.component.html?raw';
import appendToTs from './append-to/tree-select-append-to.component.ts.txt?raw';
import customIconHtml from './custom-icon/tree-select-custom-icon.component.html?raw';
import customIconTs from './custom-icon/tree-select-custom-icon.component.ts.txt?raw';
import customIconScss from './custom-icon/tree-select-custom-icon.component.scss?raw';
import keysHtml from './keys/tree-select-keys.component.html?raw';
import keysTs from './keys/tree-select-keys.component.ts.txt?raw';
import customTemplateHtml from './custom-template/custom-template.component.html?raw';
import customTemplateTs from './custom-template/custom-template.component.ts.txt?raw';
import iconParentHtml from './icon-parent/icon-parent.component.html?raw';
import iconParentTs from './icon-parent/icon-parent.component.ts.txt?raw';
import virtualScrollHtml from './virtual-scroll/tree-select-virtual-scroll.component.html?raw';
import virtualScrollTs from './virtual-scroll/tree-select-virtual-scroll.component.ts.txt?raw';
import virtualScrollScss from './virtual-scroll/tree-select-virtual-scroll.component.scss?raw';

@Component({
  selector: 'd-tree-select-demo',
  templateUrl: './tree-select-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TreeSelectDemoComponent implements OnInit, OnDestroy {
  TreeSelectBasicComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  TreeSelectLabelizationComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: labelizationHtml },
    { title: 'TS', language: 'typescript', code: labelizationTs },
  ];
  TreeSelectLeafOnlyComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: leafOnlyHtml },
    { title: 'TS', language: 'typescript', code: leafOnlyTs },
  ];
  TreeSelectHooksComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hooksHtml },
    { title: 'TS', language: 'typescript', code: hooksTs },
  ];
  TreeSelectSearchableComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: searchableHtml },
    { title: 'TS', language: 'typescript', code: searchableTs },
  ];
  TreeSelectAppendToComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: appendToHtml },
    { title: 'TS', language: 'typescript', code: appendToTs },
  ];
  TreeSelectCustomIconComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customIconHtml },
    { title: 'TS', language: 'typescript', code: customIconTs },
    { title: 'SCSS', language: 'css', code: customIconScss },
  ];
  TreeSelectKeysComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: keysHtml },
    { title: 'TS', language: 'typescript', code: keysTs },
  ];
  TreeSelectCustomTemplateComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customTemplateHtml },
    { title: 'TS', language: 'typescript', code: customTemplateTs },
  ];
  TreeSelectIconParentComponent: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: iconParentHtml },
    { title: 'TS', language: 'typescript', code: iconParentTs },
  ];

  treeSelectDemoVirtualScroll: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: virtualScrollHtml },
    { title: 'TS', language: 'typescript', code: virtualScrollTs },
    { title: 'SCSS', language: 'css', code: virtualScrollScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tree-select.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tree-select.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'labelization', value: values.labelization },
      { dAnchorLink: 'leaf-only', value: values['leaf-only'] },
      { dAnchorLink: 'init-hooks', value: values['init-hooks'] },
      { dAnchorLink: 'simple-search', value: values['simple-search'] },
      { dAnchorLink: 'append-to-element', value: values['append-to-element'] },
      { dAnchorLink: 'custom-icon', value: values['custom-icon'] },
      { dAnchorLink: 'keys', value: values.keys },
      { dAnchorLink: 'custom-template', value: values['custom-template'] },
      { dAnchorLink: 'icon-parent', value: values['icon-parent'] },
      { dAnchorLink: 'virtual-scroll', value: values['virtual-scroll'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
