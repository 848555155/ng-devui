import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import tableHtml from './table/table.component.html?raw';
import tableTs from './table/table.component.ts.txt?raw';
import tableScss from './table/table.component.scss?raw';
import resetPositionHtml from './table/reset-position/reset-position.component.html?raw';
import resetPositionTs from './table/reset-position/reset-position.component.ts.txt?raw';
import resetPositionScss from './table/reset-position/reset-position.component.scss?raw';
import mockDataTs from './mock-data.ts.txt?raw';

@Component({
  selector: 'd-gantt-demo',
  templateUrl: './gantt-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class GanttDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
    { title: 'data', language: 'typescript', code: mockDataTs },
  ];
  inTableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: tableHtml },
    { title: 'TS', language: 'typescript', code: tableTs },
    { title: 'SCSS', language: 'css', code: tableScss },
    { title: 'reset-position-HTML', language: 'typescript', code: resetPositionHtml },
    { title: 'reset-position-TS', language: 'xml', code: resetPositionTs },
    { title: 'reset-position-CSS', language: 'typescript', code: resetPositionScss },
    { title: 'data', language: 'typescript', code: mockDataTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.gantt.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.gantt.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'gantt-basic', value: values['gantt-basic'] },
      { dAnchorLink: 'gantt-in-datatable', value: values['gantt-in-datatable'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
