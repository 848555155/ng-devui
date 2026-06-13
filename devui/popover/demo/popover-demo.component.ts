import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import positionHtml from './position/position.component.html?raw';
import positionTs from './position/position.component.ts.txt?raw';
import positionScss from './position/position.component.scss?raw';
import manualHtml from './manual/manual.component.html?raw';
import manualTs from './manual/manual.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import scrollElementHtml from './scroll-element/scroll-element.component.html?raw';
import scrollElementTs from './scroll-element/scroll-element.component.ts.txt?raw';
import hoverDelayTimeHtml from './hover-delay-time/hover-delay-time.component.html?raw';
import hoverDelayTimeTs from './hover-delay-time/hover-delay-time.component.ts.txt?raw';

@Component({
  templateUrl: './popover-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PopoverDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];

  positionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: positionHtml },
    { title: 'TS', language: 'typescript', code: positionTs },
    { title: 'SCSS', language: 'css', code: positionScss },
  ];

  manualSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: manualHtml },
    { title: 'TS', language: 'typescript', code: manualTs },
  ];

  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
  ];

  scrollElementSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: scrollElementHtml },
    { title: 'TS', language: 'typescript', code: scrollElementTs },
  ];

  hoverDelayTimeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hoverDelayTimeHtml },
    { title: 'TS', language: 'typescript', code: hoverDelayTimeTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.popover.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.popover.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'position', value: values.position },
      { dAnchorLink: 'manual-control-display', value: values['manual-control-display'] },
      { dAnchorLink: 'custom-prompt-content', value: values['custom-prompt-content'] },
      { dAnchorLink: 'parent-container-settings', value: values['parent-container-settings'] },
      { dAnchorLink: 'hover-delay-time', value: values['hover-delay-time'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
