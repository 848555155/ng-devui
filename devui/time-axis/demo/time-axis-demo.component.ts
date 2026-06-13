import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import allStatesHtml from './all-states/time-axis-all-states.component.html?raw';
import allStatesTs from './all-states/time-axis-all-states.component.ts.txt?raw';
import allStatesScss from './all-states/time-axis-all-states.component.scss?raw';
import directionHtml from './direction/time-axis-direction.component.html?raw';
import directionTs from './direction/time-axis-direction.component.ts.txt?raw';
import htmlContentHtml from './html-content/time-axis-html-content.component.html?raw';
import htmlContentTs from './html-content/time-axis-html-content.component.ts.txt?raw';
import htmlContentScss from './html-content/time-axis-html-content.component.scss?raw';
import templateContentHtml from './template-content/time-axis-template-content.component.html?raw';
import templateContentTs from './template-content/time-axis-template-content.component.ts.txt?raw';
import alternativeModeHtml from './alternative-mode/alternative-mode.component.html?raw';
import alternativeModeTs from './alternative-mode/alternative-mode.component.ts.txt?raw';
import seperateWayHtml from './seperate-way/seperate-way.component.html?raw';
import seperateWayTs from './seperate-way/seperate-way.component.ts.txt?raw';
import customDotHtml from './custom-dot/custom-dot.component.html?raw';
import customDotTs from './custom-dot/custom-dot.component.ts.txt?raw';
import singleHtml from './single/single.component.html?raw';
import singleTs from './single/single.component.ts.txt?raw';

@Component({
  selector: 'd-demo-time-axis',
  templateUrl: './time-axis-demo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TimeAxisDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: allStatesHtml },
    { title: 'TS', language: 'typescript', code: allStatesTs },
    { title: 'SCSS', language: 'css', code: allStatesScss },
  ];
  directionSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: directionHtml },
    { title: 'TS', language: 'typescript', code: directionTs },
  ];
  htmlSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: htmlContentHtml },
    { title: 'TS', language: 'typescript', code: htmlContentTs },
    { title: 'SCSS', language: 'css', code: htmlContentScss },
  ];
  templateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: templateContentHtml },
    { title: 'TS', language: 'typescript', code: templateContentTs },
  ];
  alternativeModeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: alternativeModeHtml },
    { title: 'TS', language: 'typescript', code: alternativeModeTs },
  ];
  seperateWaySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: seperateWayHtml },
    { title: 'TS', language: 'typescript', code: seperateWayTs },
  ];
  customDotSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customDotHtml },
    { title: 'TS', language: 'typescript', code: customDotTs },
  ];
  singleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: singleHtml },
    { title: 'TS', language: 'typescript', code: singleTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.time-axis.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.time-axis.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'direction', value: values.direction },
      { dAnchorLink: 'single', value: values.single },
      { dAnchorLink: 'custom-dot', value: values['custom-dot'] },
      { dAnchorLink: 'content-with-template', value: values['content-with-template'] },
      { dAnchorLink: 'content-with-html', value: values['content-with-html'] },
      { dAnchorLink: 'content-with-alternative-mode', value: values['content-with-alternative-mode'] },
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'seperate-way', value: values['seperate-way'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
