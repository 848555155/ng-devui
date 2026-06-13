import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import drawerContentHtml from './drawerContent/drawer-content.component.html?raw';
import drawerContentTs from './drawerContent/drawer-content.component.ts.txt?raw';
import drawerContentScss from './drawerContent/drawer-content.component.scss?raw';
import undestroyableHtml from './undestroyable/undestroyable.component.html?raw';
import undestroyableTs from './undestroyable/undestroyable.component.ts.txt?raw';
import drawerContentHtml1 from './drawerContent/drawer-content.component.html?raw';
import drawerContentTs1 from './drawerContent/drawer-content.component.ts.txt?raw';
import drawerContentScss1 from './drawerContent/drawer-content.component.scss?raw';
import templateHtml from './template/template.component.html?raw';
import templateTs from './template/template.component.ts.txt?raw';
import resizeHtml from './resize/resize.component.html?raw';
import resizeTs from './resize/resize.component.ts.txt?raw';
@Component({
  selector: 'd-drawer-demo',
  standalone: false,
  templateUrl: './drawer-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DrawerDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'drawerContent-html', language: 'xml', code: drawerContentHtml },
    { title: 'drawerContent-ts', language: 'typescript', code: drawerContentTs },
    { title: 'drawerContent-css', language: 'css', code: drawerContentScss },
  ];

  undestroyableSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: undestroyableHtml },
    { title: 'TS', language: 'typescript', code: undestroyableTs },
    { title: 'drawerContent-html', language: 'xml', code: drawerContentHtml },
    { title: 'drawerContent-ts', language: 'typescript', code: drawerContentTs },
    { title: 'drawerContent-css', language: 'css', code: drawerContentScss },
  ];

  templateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: templateHtml },
    { title: 'TS', language: 'typescript', code: templateTs },
  ];

  resizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: resizeHtml },
    { title: 'TS', language: 'typescript', code: resizeTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.drawer.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.drawer.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'do-not-destroy-after-closing', value: values['do-not-destroy-after-closing'] },
      { dAnchorLink: 'template', value: values.template },
      { dAnchorLink: 'resize', value: values.resize },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
