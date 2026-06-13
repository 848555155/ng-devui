import {
  Component, OnDestroy, OnInit
} from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import configHtml from './config/config.component.html?raw';
import configTs from './config/config.component.ts.txt?raw';
import configScss from './config/config.component.scss?raw';

@Component({
  selector: 'd-quadrant-diagram-demo',
  templateUrl: './quadrant-diagram-demo.component.html',
  standalone: false
})

export class QuadrantDiagramDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss }
  ];
  configSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: configHtml },
    { title: 'TS', language: 'typescript', code: configTs },
    { title: 'SCSS', language: 'css', code: configScss }
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.quadrant-diagram.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.quadrant-diagram.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'custom-quadrant', value: values['custom-quadrant'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
