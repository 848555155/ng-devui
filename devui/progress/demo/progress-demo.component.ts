import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import circleHtml from './circle/circle.component.html?raw';
import circleTs from './circle/circle.component.ts.txt?raw';
import circleScss from './circle/circle.component.scss?raw';
import multipleHtml from './multiple/multiple.component.html?raw';
import multipleTs from './multiple/multiple.component.ts.txt?raw';
import progressDemoScss from './progress-demo.component.scss?raw';

@Component({
  selector: 'd-demo-progress',
  templateUrl: './progress-demo.component.html',
  styleUrls: ['./progress-demo.component.scss'],
  standalone: false
})
export class ProgressDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  circleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: circleHtml },
    { title: 'TS', language: 'typescript', code: circleTs },
    { title: 'SCSS', language: 'css', code: circleScss },
  ];
  multipleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multipleHtml },
    { title: 'TS', language: 'typescript', code: multipleTs },
    { title: 'SCSS', language: 'css', code: progressDemoScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.progress.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.progress.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'circle-usage', value: values['circle-usage'] },
      { dAnchorLink: 'multiple-usage', value: values['multiple-usage'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
