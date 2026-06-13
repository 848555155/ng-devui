import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/data-table-demo-basic.component.html?raw';
import basicTs from './basic/data-table-demo-basic.component.ts.txt?raw';
import basicOldHtml from './basic-old/basic-old.component.html?raw';
import basicOldTs from './basic-old/basic-old.component.ts.txt?raw';
import interactionColumnHtml from './interaction-column/interaction-column.component.html?raw';
import interactionColumnTs from './interaction-column/interaction-column.component.ts.txt?raw';
import interactionHtml from './interaction/interaction.component.html?raw';
import interactionTs from './interaction/interaction.component.ts.txt?raw';
import memoryTableHtml from './memory-table/memory-table.component.html?raw';
import memoryTableTs from './memory-table/memory-table.component.ts.txt?raw';
import memoryTableTs1 from './memory-table/memory-table-width.directive.ts.txt?raw';
import checkOptionsHtml from './check-options/check-options.component.html?raw';
import checkOptionsTs from './check-options/check-options.component.ts.txt?raw';
import checkOptionsColumnHtml from './check-options-column/check-options-column.component.html?raw';
import checkOptionsColumnTs from './check-options-column/check-options-column.component.ts.txt?raw';
import asyncHtml from './async/data-table-demo-async.component.html?raw';
import asyncTs from './async/data-table-demo-async.component.ts.txt?raw';
import maxHeightHtml from './max-height/data-table-demo-maxheight.component.html?raw';
import maxHeightTs from './max-height/data-table-demo-maxheight.component.ts.txt?raw';
import lazyHtml from './lazy/data-table-demo-lazyloaddata.component.html?raw';
import lazyTs from './lazy/data-table-demo-lazyloaddata.component.ts.txt?raw';
import multiHeaderHtml from './multi-header/data-table-demo-multiheader.component.html?raw';
import multiHeaderTs from './multi-header/data-table-demo-multiheader.component.ts.txt?raw';
import headerGroupingHtml from './header-grouping/header-grouping.component.html?raw';
import headerGroupingTs from './header-grouping/header-grouping.component.ts.txt?raw';
import editableHtml from './editable/data-table-demo-editable.component.html?raw';
import editableTs from './editable/data-table-demo-editable.component.ts.txt?raw';
import editableOldHtml from './editable-old/editable-old.component.html?raw';
import editableOldTs from './editable-old/editable-old.component.ts.txt?raw';
import treeTableHtml from './tree-table/tree-data.component.html?raw';
import treeTableTs from './tree-table/tree-data.component.ts.txt?raw';
import treeTableOldHtml from './tree-table-old/tree-table-old.component.html?raw';
import treeTableOldTs from './tree-table-old/tree-table-old.component.ts.txt?raw';
import expandRowHtml from './expand-row/expand-row.component.html?raw';
import expandRowTs from './expand-row/expand-row.component.ts.txt?raw';
import expandRowOldHtml from './expand-row-old/expand-row-old.component.html?raw';
import expandRowOldTs from './expand-row-old/expand-row-old.component.ts.txt?raw';
import fixColumnHtml from './fix-column/fix-column.component.html?raw';
import fixColumnTs from './fix-column/fix-column.component.ts.txt?raw';
import fixColumnOldHtml from './fix-column-old/fix-column-old.component.html?raw';
import fixColumnOldTs from './fix-column-old/fix-column-old.component.ts.txt?raw';
import dragColumnHtml from './drag-column/drag-column.component.html?raw';
import dragColumnTs from './drag-column/drag-column.component.ts.txt?raw';
import cellMergeHtml from './cell-merge/cell-merge.component.html?raw';
import cellMergeTs from './cell-merge/cell-merge.component.ts.txt?raw';
import cellMergeScss from './cell-merge/cell-merge.component.scss?raw';
import dragRowHtml from './drag-row/drag-row.component.html?raw';
import dragRowTs from './drag-row/drag-row.component.ts.txt?raw';
import dragRowScss from './drag-row/drag-row.component.scss?raw';
import mutiDragRowHtml from './muti-drag-row/muti-drag-row.component.html?raw';
import mutiDragRowTs from './muti-drag-row/muti-drag-row.component.ts.txt?raw';
import mutiDragRowScss from './muti-drag-row/muti-drag-row.component.scss?raw';
import virtualScrollHtml from './virtual-scroll/virtual-scroll.component.html?raw';
import virtualScrollTs from './virtual-scroll/virtual-scroll.component.ts.txt?raw';
import mutilStylesHtml from './mutil-styles/mutil-styles.component.html?raw';
import mutilStylesTs from './mutil-styles/mutil-styles.component.ts.txt?raw';
import dynamicColsHtml from './dynamic-cols/dynamic-cols-demo.component.html?raw';
import dynamicColsTs from './dynamic-cols/dynamic-cols-demo.component.ts.txt?raw';
import fixHeightVirtualScrollHtml from './fix-height-virtual-scroll/fix-height-virtual-scroll.component.html?raw';
import fixHeightVirtualScrollTs from './fix-height-virtual-scroll/fix-height-virtual-scroll.component.ts.txt?raw';
import mockDataTs from './mock-data.ts.txt?raw';

@Component({
  selector: 'd-datatable-demo',
  templateUrl: './data-table-demo.component.html',
  standalone: false
})
export class DataTableDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  basicOldSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicOldHtml },
    { title: 'TS', language: 'typescript', code: basicOldTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  interactionColumnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: interactionColumnHtml },
    { title: 'TS', language: 'typescript', code: interactionColumnTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  interactionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: interactionHtml },
    { title: 'TS', language: 'typescript', code: interactionTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  memoryTableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: memoryTableHtml },
    { title: 'TS', language: 'typescript', code: memoryTableTs },
    { title: 'Directive', language: 'typescript', code: memoryTableTs1 },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  checkOptionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: checkOptionsHtml },
    { title: 'TS', language: 'typescript', code: checkOptionsTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  checkOptionColSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: checkOptionsColumnHtml },
    { title: 'TS', language: 'typescript', code: checkOptionsColumnTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  asyncSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: asyncHtml },
    { title: 'TS', language: 'typescript', code: asyncTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  maxHeightSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: maxHeightHtml },
    { title: 'TS', language: 'typescript', code: maxHeightTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  lazySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: lazyHtml },
    { title: 'TS', language: 'typescript', code: lazyTs },
  ];
  multiSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiHeaderHtml },
    { title: 'TS', language: 'typescript', code: multiHeaderTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  headerGroupingSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: headerGroupingHtml },
    { title: 'TS', language: 'typescript', code: headerGroupingTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  editableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: editableHtml },
    { title: 'TS', language: 'typescript', code: editableTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  editableOldSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: editableOldHtml },
    { title: 'TS', language: 'typescript', code: editableOldTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  treeTableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: treeTableHtml },
    { title: 'TS', language: 'typescript', code: treeTableTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  treeTableOldSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: treeTableOldHtml },
    { title: 'TS', language: 'typescript', code: treeTableOldTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  expandRowSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: expandRowHtml },
    { title: 'TS', language: 'typescript', code: expandRowTs },
  ];
  expandRowOldSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: expandRowOldHtml },
    { title: 'TS', language: 'typescript', code: expandRowOldTs },
  ];
  fixColumnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: fixColumnHtml },
    { title: 'TS', language: 'typescript', code: fixColumnTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  fixColumnOldSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: fixColumnOldHtml },
    { title: 'TS', language: 'typescript', code: fixColumnOldTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  dragColumnSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dragColumnHtml },
    { title: 'TS', language: 'typescript', code: dragColumnTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  cellMergeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: cellMergeHtml },
    { title: 'TS', language: 'typescript', code: cellMergeTs },
    { title: 'SCSS', language: 'css', code: cellMergeScss },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  dragRowSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dragRowHtml },
    { title: 'TS', language: 'typescript', code: dragRowTs },
    { title: 'SCSS', language: 'css', code: dragRowScss },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  mutiDragRowSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: mutiDragRowHtml },
    { title: 'TS', language: 'typescript', code: mutiDragRowTs },
    { title: 'SCSS', language: 'css', code: mutiDragRowScss },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  virtualScrollSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: virtualScrollHtml },
    { title: 'TS', language: 'typescript', code: virtualScrollTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  mutilStyles: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: mutilStylesHtml },
    { title: 'TS', language: 'typescript', code: mutilStylesTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  dynamicColStyles: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dynamicColsHtml },
    { title: 'TS', language: 'typescript', code: dynamicColsTs },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];
  fixHeightVirtualScrollSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: fixHeightVirtualScrollHtml },
    {
      title: 'TS',
      language: 'typescript',
      code: fixHeightVirtualScrollTs,
    },
    { title: 'mock-data', language: 'typescript', code: mockDataTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.datatable.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.datatable.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'mutil-styles', value: values['mutil-styles'] },
      { dAnchorLink: 'dynamic-cols', value: values['dynamic-cols'] },
      { dAnchorLink: 'async-loading', value: values['async-loading'] },
      { dAnchorLink: 'table-interaction', value: values['table-interaction'] },
      { dAnchorLink: 'table-memory', value: values['table-memory'] },
      { dAnchorLink: 'table-check-options', value: values['table-check-options'] },
      { dAnchorLink: 'lazy-loading-of-list-data', value: values['lazy-loading-of-list-data'] },
      { dAnchorLink: 'virtual-scroll', value: values['virtual-scroll'] },
      { dAnchorLink: 'table-fixing', value: values['table-fixing'] },
      { dAnchorLink: 'fixed-virtual-scroll', value: values['fixed-virtual-scroll'] },
      { dAnchorLink: 'header-grouping', value: values['header-grouping'] },
      { dAnchorLink: 'edit-cell', value: values['edit-cell'] },
      { dAnchorLink: 'expand-row', value: values['expand-row'] },
      { dAnchorLink: 'tree-form', value: values['tree-form'] },
      { dAnchorLink: 'fixed-column', value: values['fixed-column'] },
      { dAnchorLink: 'column-dragging', value: values['column-dragging'] },
      { dAnchorLink: 'cell-merge', value: values['cell-merge'] },
      { dAnchorLink: 'drag-row', value: values['drag-row'] },
      { dAnchorLink: 'muti-drag-row', value: values['muti-drag-row'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
