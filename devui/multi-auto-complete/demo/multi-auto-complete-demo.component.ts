import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import defaultHtml from './default/multi-auto-complete-demo-default.component.html?raw';
import defaultTs from './default/multi-auto-complete-demo-default.component.ts.txt?raw';
import arrayHtml from './array/multi-auto-complete-demo-array.component.html?raw';
import arrayTs from './array/multi-auto-complete-demo-array.component.ts.txt?raw';
import disabledHtml from './disabled/multi-auto-complete-demo-disabled.component.html?raw';
import disabledTs from './disabled/multi-auto-complete-demo-disabled.component.ts.txt?raw';

@Component({
  selector: 'd-multi-auto-complete-demo',
  standalone: false,
  templateUrl: './multi-auto-complete-demo.component.html',
  styleUrl: './multi-auto-complete-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiAutoCompleteDemoComponent implements OnInit, OnDestroy {
  MultiAutoCompleteDemoDefault: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: defaultHtml },
    { title: 'TS', language: 'typescript', code: defaultTs },
  ];

  MultiAutoCompleteDemoArray: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: arrayHtml },
    { title: 'TS', language: 'typescript', code: arrayTs },
  ];

  MultiAutoCompleteDemoDisabled: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.multi-auto-complete.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.multi-auto-complete.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'auto-complete-array', value: values['auto-complete-array'] },
      { dAnchorLink: 'auto-complete-disabled', value: values['auto-complete-disabled'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
