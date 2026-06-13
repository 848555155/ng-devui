import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import moreConfigHtml from './more-config/more-config.component.html?raw';
import moreConfigTs from './more-config/more-config.component.ts.txt?raw';
import moreConfigScss from './more-config/more-config.component.scss?raw';

@Component({
  selector: 'd-dashboard-demo',
  standalone: false,
  templateUrl: './dashboard-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DashboardDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  moreConfigSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: moreConfigHtml },
    { title: 'TS', language: 'typescript', code: moreConfigTs },
    { title: 'SCSS', language: 'css', code: moreConfigScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.dashboard.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.dashboard.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'more-config', value: values['more-config'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
