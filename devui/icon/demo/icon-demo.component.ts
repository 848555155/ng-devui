import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import iconGroupHtml from './icon-group/icon-group.component.html?raw';
import iconGroupTs from './icon-group/icon-group.component.ts.txt?raw';
import iconGroupScss from './icon-group/icon-group.component.scss?raw';

@Component({
  standalone: false,
  templateUrl: './icon-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class IconDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'CSS', language: 'css', code: basicScss },
  ];
  iconGroupSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'html', code: iconGroupHtml },
    { title: 'TS', language: 'typescript', code: iconGroupTs },
    { title: 'CSS', language: 'css', code: iconGroupScss },
  ];

  navItems = [{ dAnchorLink: 'basic', value: '基本用法' }];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.icon.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.icon.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic', value: values.basic },
      { dAnchorLink: 'icon-group', value: values['icon-group'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
