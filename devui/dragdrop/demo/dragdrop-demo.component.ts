import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import treeHtml from './tree/tree.component.html?raw';
import treeTs from './tree/tree.component.ts.txt?raw';
import treeScss from './tree/tree.component.scss?raw';
import followHtml from './follow/follow.component.html?raw';
import followTs from './follow/follow.component.ts.txt?raw';
import followScss from './follow/follow.component.scss?raw';
import switchHtml from './switch/switch.component.html?raw';
import switchTs from './switch/switch.component.ts.txt?raw';
import switchScss from './switch/switch.component.scss?raw';
import positionHtml from './position/position.component.html?raw';
import positionTs from './position/position.component.ts.txt?raw';
import positionScss from './position/position.component.scss?raw';
import dropScrollHtml from './drop-scroll/drop-scroll.component.html?raw';
import dropScrollTs from './drop-scroll/drop-scroll.component.ts.txt?raw';
import dropScrollScss from './drop-scroll/drop-scroll.component.scss?raw';
import originPlaceholderHtml from './origin-placeholder/origin-placeholder.component.html?raw';
import originPlaceholderTs from './origin-placeholder/origin-placeholder.component.ts.txt?raw';
import originPlaceholderScss from './origin-placeholder/origin-placeholder.component.scss?raw';
import batchDragHtml from './batch-drag/batch-drag.component.html?raw';
import batchDragTs from './batch-drag/batch-drag.component.ts.txt?raw';
import batchDragScss from './batch-drag/batch-drag.component.scss?raw';
import crossDimensionHtml from './cross-dimension/cross-dimension.component.html?raw';
import crossDimensionTs from './cross-dimension/cross-dimension.component.ts.txt?raw';
import crossDimensionScss from './cross-dimension/cross-dimension.component.scss?raw';

@Component({
  selector: 'd-demo-dragdrop',
  standalone: false,
  templateUrl: './dragdrop-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DragDropDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  treeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: treeHtml },
    { title: 'TS', language: 'typescript', code: treeTs },
    { title: 'SCSS', language: 'css', code: treeScss },
  ];

  followSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: followHtml },
    { title: 'TS', language: 'typescript', code: followTs },
    { title: 'SCSS', language: 'css', code: followScss },
  ];

  switchSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: switchHtml },
    { title: 'TS', language: 'typescript', code: switchTs },
    { title: 'SCSS', language: 'css', code: switchScss },
  ];

  positionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: positionHtml },
    { title: 'TS', language: 'typescript', code: positionTs },
    { title: 'SCSS', language: 'css', code: positionScss },
  ];

  dropScrollSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dropScrollHtml },
    { title: 'TS', language: 'typescript', code: dropScrollTs },
    { title: 'SCSS', language: 'css', code: dropScrollScss },
  ];
  originPlaceholderSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: originPlaceholderHtml },
    { title: 'TS', language: 'typescript', code: originPlaceholderTs },
    { title: 'SCSS', language: 'css', code: originPlaceholderScss },
  ];
  batchDragSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: batchDragHtml },
    { title: 'TS', language: 'typescript', code: batchDragTs },
    { title: 'SCSS', language: 'css', code: batchDragScss },
  ];

  crossDimensionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: crossDimensionHtml },
    { title: 'TS', language: 'typescript', code: crossDimensionTs },
    { title: 'SCSS', language: 'css', code: crossDimensionScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.dragdrop.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.dragdrop.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'multi-level-tree-drag', value: values['multi-level-tree-drag'] },
      { dAnchorLink: 'drag-entity-elements-to-follow', value: values['drag-entity-elements-to-follow'] },
      { dAnchorLink: 'cross-edge-switching', value: values['cross-edge-switching'] },
      { dAnchorLink: 'external-location', value: values['external-location'] },
      { dAnchorLink: 'drag-and-roll-container-enhancement', value: values['drag-and-roll-container-enhancement'] },
      { dAnchorLink: 'source-placeholder', value: values['source-placeholder'] },
      { dAnchorLink: 'batch-drag-and-drop', value: values['batch-drag-and-drop'] },
      { dAnchorLink: '2D-drag-and-drop-preview', value: values['2D-drag-and-drop-preview'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
