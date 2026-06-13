import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/splitter-demo-basic.component.html?raw';
import basicTs from './basic/splitter-demo-basic.component.ts.txt?raw';
import verticalHtml from './vertical/splitter-demo-vertical.component.html?raw';
import verticalTs from './vertical/splitter-demo-vertical.component.ts.txt?raw';
import multiHtml from './multi/splitter-demo-multi.component.html?raw';
import multiTs from './multi/splitter-demo-multi.component.ts.txt?raw';
import directionHtml from './direction/splitter-demo-direction.component.html?raw';
import directionTs from './direction/splitter-demo-direction.component.ts.txt?raw';
import shrinkHtml from './shrink/shrink.component.html?raw';
import shrinkTs from './shrink/shrink.component.ts.txt?raw';
import shrinkScss from './shrink/shrink.component.scss?raw';
import splitterDemoScss from './splitter-demo.component.scss?raw';

@Component({
  selector: 'd-demo-splitter',
  standalone: false,
  templateUrl: './splitter-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterDemoComponent implements OnInit, OnDestroy {
  SplitterBasicComponent = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: splitterDemoScss },
  ];

  SplitterVerticalComponent = [
    { title: 'HTML', language: 'html', code: verticalHtml },
    { title: 'TS', language: 'typescript', code: verticalTs },
    { title: 'SCSS', language: 'css', code: splitterDemoScss },
  ];

  SplitterMultiComponent = [
    { title: 'HTML', language: 'html', code: multiHtml },
    { title: 'TS', language: 'typescript', code: multiTs },
    { title: 'SCSS', language: 'css', code: splitterDemoScss },
  ];

  SplitterDirectionComponent = [
    { title: 'HTML', language: 'html', code: directionHtml },
    { title: 'TS', language: 'typescript', code: directionTs },
    { title: 'SCSS', language: 'css', code: splitterDemoScss },
  ];

  SplitterFoldedMenuComponent = [
    { title: 'HTML', language: 'html', code: shrinkHtml },
    { title: 'TS', language: 'typescript', code: shrinkTs },
    { title: 'SCSS', language: 'css', code: shrinkScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.splitter.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.splitter.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'vertical-layout', value: values['vertical-layout'] },
      { dAnchorLink: 'combine-layout', value: values['combine-layout'] },
      { dAnchorLink: 'certain-unfold-direction', value: values['certain-unfold-direction'] },
      { dAnchorLink: 'shrink-show-menu', value: values['shrink-show-menu'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
