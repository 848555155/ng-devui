import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import responsiveHtml from './responsive/responsive.component.html?raw';
import responsiveTs from './responsive/responsive.component.ts.txt?raw';
import responsiveScss from './responsive/responsive.component.scss?raw';
import embedHtml from './embed/embed.component.html?raw';
import embedTs from './embed/embed.component.ts.txt?raw';
import embedScss from './embed/embed.component.scss?raw';
@Component({
  selector: 'd-input-group-demo',
  standalone: false,
  templateUrl: './input-group-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputGroupDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  responsiveSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: responsiveHtml },
    { title: 'TS', language: 'typescript', code: responsiveTs },
    { title: 'SCSS', language: 'css', code: responsiveScss },
  ];
  embedSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: embedHtml },
    { title: 'TS', language: 'typescript', code: embedTs },
    { title: 'SCSS', language: 'css', code: embedScss },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.input-group.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.input-group.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'responsive-usage', value: values['responsive-usage'] },
      { dAnchorLink: 'embed-usage', value: values['embed-usage'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
