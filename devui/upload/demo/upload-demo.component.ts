import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import multiHtml from './multi/multi.component.html?raw';
import multiTs from './multi/multi.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import customizeScss from './customize/customize.component.scss?raw';
import autoHtml from './auto/auto.component.html?raw';
import autoTs from './auto/auto.component.ts.txt?raw';
import dynamicUploadOptionsHtml from './dynamic-upload-options/dynamic-upload-options.component.html?raw';
import dynamicUploadOptionsTs from './dynamic-upload-options/dynamic-upload-options.component.ts.txt?raw';
import customizeAreaUploadHtml from './customize-area-upload/customize-area-upload.component.html?raw';
import customizeAreaUploadTs from './customize-area-upload/customize-area-upload.component.ts.txt?raw';
import customizeAreaUploadScss from './customize-area-upload/customize-area-upload.component.scss?raw';
import sliceHtml from './slice/upload-slice.component.html?raw';
import sliceTs from './slice/upload-slice.component.ts.txt?raw';
import sliceScss from './slice/upload-slice.component.scss?raw';

@Component({
  selector: 'd-upload-demo',
  standalone: false,
  templateUrl: './upload-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class UploadDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  multiSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiHtml },
    { title: 'TS', language: 'typescript', code: multiTs },
  ];
  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
    { title: 'SCSS', language: 'css', code: customizeScss },
  ];
  autoSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: autoHtml },
    { title: 'TS', language: 'typescript', code: autoTs },
  ];
  dynamicUploadOptionsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dynamicUploadOptionsHtml },
    { title: 'TS', language: 'typescript', code: dynamicUploadOptionsTs },
  ];
  customizeAreaUploadSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeAreaUploadHtml },
    { title: 'TS', language: 'typescript', code: customizeAreaUploadTs },
    { title: 'SCSS', language: 'css', code: customizeAreaUploadScss },
  ];

  UploadDemoSlice: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: sliceHtml },
    { title: 'TS', language: 'typescript', code: sliceTs },
    { title: 'SCSS', language: 'css', code: sliceScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.upload.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.upload.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'multi-files', value: values['multi-files'] },
      { dAnchorLink: 'auto-upload', value: values['auto-upload'] },
      { dAnchorLink: 'custom', value: values.custom },
      { dAnchorLink: 'dynamic-upload-options', value: values['dynamic-upload-options'] },
      { dAnchorLink: 'customize-area-upload', value: values['customize-area-upload'] },
      { dAnchorLink: 'upload-slice', value: values['upload-slice'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
