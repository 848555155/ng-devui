import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import treeFactoryHtml from './tree-factory/tree-factory.component.html?raw';
import treeFactoryTs from './tree-factory/tree-factory.component.ts.txt?raw';
import mergeNodeHtml from './merge-node/merge-node.component.html?raw';
import mergeNodeTs from './merge-node/merge-node.component.ts.txt?raw';
import customLoadingHtml from './custom-loading/custom-loading.component.html?raw';
import customLoadingTs from './custom-loading/custom-loading.component.ts.txt?raw';
import customLoadingTs1 from './custom-loading/custom-loading-svg.ts.txt?raw';
import customKeyHtml from './custom-key/custom-key.component.html?raw';
import customKeyTs from './custom-key/custom-key.component.ts.txt?raw';
import searchFilterHtml from './search-filter/search-filter.component.html?raw';
import searchFilterTs from './search-filter/search-filter.component.ts.txt?raw';
import operateBtnHtml from './operate-btn/operate-btn.component.html?raw';
import operateBtnTs from './operate-btn/operate-btn.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import customizeScss from './customize/customize.component.scss?raw';
import draggableHtml from './draggable/draggable.component.html?raw';
import draggableTs from './draggable/draggable.component.ts.txt?raw';
import draggableScss from './draggable/draggable.component.scss?raw';
import checkControlHtml from './check-control/check-control.component.html?raw';
import checkControlTs from './check-control/check-control.component.ts.txt?raw';
import virtualScrollHtml from './virtual-scroll/virtual-scroll.component.html?raw';
import virtualScrollTs from './virtual-scroll/virtual-scroll.component.ts.txt?raw';
import virtualScrollCss from './virtual-scroll/virtual-scroll.component.css?raw';

@Component({
  selector: 'd-tree-demo',
  templateUrl: './tree-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TreeDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  treeFactorySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: treeFactoryHtml },
    { title: 'TS', language: 'typescript', code: treeFactoryTs },
  ];
  MergeNodeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: mergeNodeHtml },
    { title: 'TS', language: 'typescript', code: mergeNodeTs },
  ];
  customLoadingSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customLoadingHtml },
    { title: 'TS', language: 'typescript', code: customLoadingTs },
    { title: 'SVG-TS', language: 'typescript', code: customLoadingTs1 },
  ];

  customKeySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customKeyHtml },
    { title: 'TS', language: 'typescript', code: customKeyTs },
  ];
  searchFilterSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: searchFilterHtml },
    { title: 'TS', language: 'typescript', code: searchFilterTs },
  ];

  operateBtnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: operateBtnHtml },
    { title: 'TS', language: 'typescript', code: operateBtnTs },
  ];

  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
    { title: 'SCSS', language: 'css', code: customizeScss },
  ];

  draggableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: draggableHtml },
    { title: 'TS', language: 'typescript', code: draggableTs },
    { title: 'SCSS', language: 'css', code: draggableScss },
  ];
  checkControlSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: checkControlHtml },
    { title: 'TS', language: 'typescript', code: checkControlTs },
  ];
  virtualScrollSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: virtualScrollHtml },
    { title: 'TS', language: 'typescript', code: virtualScrollTs },
    { title: 'SCSS', language: 'css', code: virtualScrollCss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tree.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tree.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'merge-node', value: values['merge-node'] },
      { dAnchorLink: 'custom-loading', value: values['lazy-loading'] },
      { dAnchorLink: 'check-control-tree', value: values['check-control-tree'] },
      { dAnchorLink: 'custom-key', value: values['custom-key'] },
      { dAnchorLink: 'operation-button', value: values['operation-button'] },
      { dAnchorLink: 'search-filtering', value: values['search-filtering'] },
      { dAnchorLink: 'custom-icon', value: values['custom-icon'] },
      { dAnchorLink: 'drag-and-drop-tree', value: values['drag-and-drop-tree'] },
      { dAnchorLink: 'tree-factory', value: values['tree-factory'] },
      { dAnchorLink: 'virtual-scroll', value: values['virtual-scroll'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
