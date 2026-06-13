import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import gridBasicHtml from './grid/grid-basic/grid-basic.component.html?raw';
import gridBasicTs from './grid/grid-basic/grid-basic.component.ts.txt?raw';
import gridGutterHtml from './grid/grid-gutter/grid-gutter.component.html?raw';
import gridGutterTs from './grid/grid-gutter/grid-gutter.component.ts.txt?raw';
import gridSpaceHtml from './grid/grid-space/grid-space.component.html?raw';
import gridSpaceTs from './grid/grid-space/grid-space.component.ts.txt?raw';
import gridOffsetHtml from './grid/grid-offset/grid-offset.component.html?raw';
import gridOffsetTs from './grid/grid-offset/grid-offset.component.ts.txt?raw';
import flexAlignJustifyHtml from './grid/flex-align-justify/flex-align-justify.component.html?raw';
import flexAlignJustifyTs from './grid/flex-align-justify/flex-align-justify.component.ts.txt?raw';
import flexOrderHtml from './grid/flex-order/flex-order.component.html?raw';
import flexOrderTs from './grid/flex-order/flex-order.component.ts.txt?raw';
import aloneFlexHtml from './grid/alone-flex/alone-flex.component.html?raw';
import aloneFlexTs from './grid/alone-flex/alone-flex.component.ts.txt?raw';
import aloneSpaceGutterHtml from './grid/alone-space-gutter/alone-space-gutter.component.html?raw';
import aloneSpaceGutterTs from './grid/alone-space-gutter/alone-space-gutter.component.ts.txt?raw';
import classDemoHtml from './grid/class-demo/class-demo.component.html?raw';
import classDemoScss from './grid/class-demo/class-demo.component.scss?raw';
import classDemoTs from './grid/class-demo/class-demo.component.ts.txt?raw';
import styleDemoHtml from './grid/style-demo/style-demo.component.html?raw';
import styleDemoTs from './grid/style-demo/style-demo.component.ts.txt?raw';
import basicHtml from './basic/layout-basic.component.html?raw';
import basicTs from './basic/layout-basic.component.ts.txt?raw';
import basicScss from './basic/layout-basic.component.scss?raw';
import topHtml from './top/top.component.html?raw';
import topTs from './top/top.component.ts.txt?raw';
import topScss from './top/top.component.scss?raw';
import topAsideHtml from './top-aside/top-aside.component.html?raw';
import topAsideTs from './top-aside/top-aside.component.ts.txt?raw';
import topAsideScss from './top-aside/top-aside.component.scss?raw';
@Component({
  selector: 'd-demo-input-number',
  templateUrl: './layout-demo.component.html',
  styleUrls: ['./layout-demo.component.scss'],
  standalone: false
})
export class LayoutDemoComponent implements OnInit, OnDestroy {
  GridBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: gridBasicHtml },
    { title: 'TS', language: 'typescript', code: gridBasicTs },
  ];
  GridGutter: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: gridGutterHtml },
    { title: 'TS', language: 'typescript', code: gridGutterTs },
  ];
  GridSpace: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: gridSpaceHtml },
    { title: 'TS', language: 'typescript', code: gridSpaceTs },
  ];
  GridOffset: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: gridOffsetHtml },
    { title: 'TS', language: 'typescript', code: gridOffsetTs },
  ];
  FlexAlignjustify: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: flexAlignJustifyHtml },
    { title: 'TS', language: 'typescript', code: flexAlignJustifyTs },
  ];
  FlexOrder: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: flexOrderHtml },
    { title: 'TS', language: 'typescript', code: flexOrderTs },
  ];
  AloneFlex: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: aloneFlexHtml },
    { title: 'TS', language: 'typescript', code: aloneFlexTs },
  ];
  AloneSpaceGutter: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: aloneSpaceGutterHtml },
    { title: 'TS', language: 'typescript', code: aloneSpaceGutterTs },
  ];
  ClassDemo: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: classDemoHtml },
    { title: 'SCSS', language: 'css', code: classDemoScss },
    { title: 'TS', language: 'typescript', code: classDemoTs },
  ];
  StyleDemo: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: styleDemoHtml },
    { title: 'TS', language: 'typescript', code: styleDemoTs },
  ];

  LayoutBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  LayoutTop: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: topHtml },
    { title: 'TS', language: 'typescript', code: topTs },
    { title: 'SCSS', language: 'css', code: topScss },
  ];

  LayoutTopAside: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: topAsideHtml },
    { title: 'TS', language: 'typescript', code: topAsideTs },
    { title: 'SCSS', language: 'css', code: topAsideScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.layout.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.layout.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'gutter', value: values.gutter },
      { dAnchorLink: 'space', value: values.space },
      { dAnchorLink: 'offset', value: values.offset },
      { dAnchorLink: 'align-justify', value: values['align-justify'] },
      { dAnchorLink: 'order', value: values.order },
      { dAnchorLink: 'flex', value: values.flex },
      { dAnchorLink: 'space-gutter', value: values['space-gutter'] },
      { dAnchorLink: 'class', value: values.class },
      { dAnchorLink: 'style', value: values.style },
      { dAnchorLink: 'layout-container', value: values['layout-container'] },
      { dAnchorLink: 'layout-container-scenario1', value: values['layout-container-scenario1'] },
      { dAnchorLink: 'layout-container-scenario2', value: values['layout-container-scenario2'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
