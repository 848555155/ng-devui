import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import lifeHtml from './life/life.component.html?raw';
import lifeTs from './life/life.component.ts.txt?raw';
import styleHtml from './style/style.component.html?raw';
import styleScss from './style/style.component.scss?raw';
import styleTs from './style/style.component.ts.txt?raw';
import singleHtml from './single/single.component.html?raw';
import singleTs from './single/single.component.ts.txt?raw';
import appendHtml from './append/append.component.html?raw';
import appendTs from './append/append.component.ts.txt?raw';
import serviceHtml from './service/toast-service.component.html?raw';
import serviceTs from './service/toast-service.component.ts.txt?raw';
import serviceScss from './service/toast-service.component.scss?raw';

@Component({
  selector: 'd-demo-toast',
  standalone: false,
  templateUrl: './toast-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ToastDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  lifeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: lifeHtml },
    { title: 'TS', language: 'typescript', code: lifeTs },
  ];
  styleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: styleHtml },
    { title: 'SCSS', language: 'css', code: styleScss },
    { title: 'TS', language: 'typescript', code: styleTs },
  ];
  singleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: singleHtml },
    { title: 'TS', language: 'typescript', code: singleTs },
  ];
  appendSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: appendHtml },
    { title: 'TS', language: 'typescript', code: appendTs },
  ];

  ToastDemoService: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: serviceHtml },
    { title: 'TS', language: 'typescript', code: serviceTs },
    { title: 'SCSS', language: 'css', code: serviceScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.toast.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.toast.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'life', value: values.life },
      { dAnchorLink: 'style', value: values.style },
      { dAnchorLink: 'single', value: values.single },
      { dAnchorLink: 'append', value: values.append },
      { dAnchorLink: 'toast-service', value: values['toast-service'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
