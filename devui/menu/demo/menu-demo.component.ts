import { Component, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import openCloseHtml from './open-close/open-close.component.html?raw';
import openCloseTs from './open-close/open-close.component.ts.txt?raw';
import openOneHtml from './open-one/open-one.component.html?raw';
import openOneTs from './open-one/open-one.component.ts.txt?raw';
import loopHtml from './loop/loop.component.html?raw';
import loopTs from './loop/loop.component.ts.txt?raw';
import loopMenuTs from './loop/loop-menu/loop-menu.component.ts.txt?raw';
import loopMenuTs1 from './loop/loop-menu/loop-sub-menu.component.ts.txt?raw';
import customNodeHtml from './custom-node/custom-node.component.html?raw';
import customNodeTs from './custom-node/custom-node.component.ts.txt?raw';
import autoExpandHtml from './auto-expand/auto-expand.component.html?raw';
import autoExpandTs from './auto-expand/auto-expand.component.ts.txt?raw';
@Component({
  selector: 'd-menu-demo',
  templateUrl: './menu-demo.component.html',
  standalone: false
})
export class MenuDemoComponent implements OnInit {
  DemoBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];

  DemoOpenClose: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: openCloseHtml },
    { title: 'TS', language: 'typescript', code: openCloseTs },
  ];

  DemoOpenOne: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: openOneHtml },
    { title: 'TS', language: 'typescript', code: openOneTs },
  ];

  DemoLoop: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: loopHtml },
    { title: 'TS', language: 'typescript', code: loopTs },
    { title: 'LoopMenu', language: 'typescript', code: loopMenuTs },
    { title: 'LoopSubMenu', language: 'typescript', code: loopMenuTs1 },
  ];

  DemoCustomNode: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customNodeHtml },
    { title: 'TS', language: 'typescript', code: customNodeTs },
  ];

  DemoAutoExpand: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: autoExpandHtml },
    { title: 'TS', language: 'typescript', code: autoExpandTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.menu.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.menu.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'open-close', value: values['open-close'] },
      { dAnchorLink: 'open-one', value: values['open-one'] },
      { dAnchorLink: 'loop', value: values.loop },
      { dAnchorLink: 'custom-node', value: values['custom-node'] },
    ];
  }
}
