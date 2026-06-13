import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/checkbox-basic.component.html?raw';
import basicTs from './basic/checkbox-basic.component.ts.txt?raw';
import basicCss from './basic/checkbox-basic.component.css?raw';
import groupHtml from './group/checkbox-group-basic.component.html?raw';
import groupTs from './group/checkbox-group-basic.component.ts.txt?raw';
import conditionChangeHtml from './condition-change/condition-change.component.html?raw';
import conditionChangeTs from './condition-change/condition-change.component.ts.txt?raw';
import conditionChangeScss from './condition-change/condition-change.component.scss?raw';
import conditionGroupHtml from './condition-group/condition-group.component.html?raw';
import conditionGroupTs from './condition-group/condition-group.component.ts.txt?raw';

@Component({
  standalone: false,
  templateUrl: './checkbox-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CheckBoxDemoComponent implements OnInit, OnDestroy {
  checkboxDemoBasic: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];

  checkboxDemoGroup: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: groupHtml },
    { title: 'TS', language: 'typescript', code: groupTs },
  ];

  conditionChangeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: conditionChangeHtml },
    { title: 'TS', language: 'typescript', code: conditionChangeTs },
    { title: 'SCSS', language: 'css', code: conditionChangeScss },
  ];

  conditionGroupSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: conditionGroupHtml },
    { title: 'TS', language: 'typescript', code: conditionGroupTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.checkbox.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.checkbox.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'checkbox-basic', value: values['checkbox-basic'] },
      { dAnchorLink: 'tabs-group', value: values['tabs-group'] },
      { dAnchorLink: 'condition-change', value: values['condition-change'] },
      { dAnchorLink: 'condition-group', value: values['condition-group'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
