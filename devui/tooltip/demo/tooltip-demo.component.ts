import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import delayHtml from './delay/delay.component.html?raw';
import delayTs from './delay/delay.component.ts.txt?raw';
import delayCss from './delay/delay.component.css?raw';

@Component({
  standalone: false,
  templateUrl: './tooltip-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TooltipDemoComponent implements OnInit, OnDestroy {
  message = 'I have animation!';
  position: 'left';

  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];
  delaySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: delayHtml },
    { title: 'TS', language: 'typescript', code: delayTs },
    { title: 'SCSS', language: 'css', code: delayCss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.tooltip.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.tooltip.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'delay-trigger', value: values['delay-trigger'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
