import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import maximizeHtml from './maximize/maximize.component.html?raw';
import maximizeTs from './maximize/maximize.component.ts.txt?raw';
import basicUpdateHtml from './basic-update/basic-update.component.html?raw';
import basicUpdateTs from './basic-update/basic-update.component.ts.txt?raw';
import basicUpdateHtml1 from './basic-update/modal-test.component.html?raw';
import basicUpdateTs1 from './basic-update/modal-test.component.ts.txt?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import customizeHtml1 from './customize/modal-alert.component.html?raw';
import customizeTs1 from './customize/modal-alert.component.ts.txt?raw';
import customizeScss from './customize/modal-alert.component.scss?raw';
import customizeHtml2 from './customize/modal-no-btn.component.html?raw';
import customizeTs2 from './customize/modal-no-btn.component.ts.txt?raw';
import customizeScss1 from './customize/modal-no-btn.component.scss?raw';
import tipsHtml from './tips/tips.component.html?raw';
import tipsTs from './tips/tips.component.ts.txt?raw';
import hideHtml from './hide/hide.component.html?raw';
import hideTs from './hide/hide.component.ts.txt?raw';
import hideHtml1 from './hide/modal-form.component.html?raw';
import hideScss from './hide/modal-form.component.scss?raw';
import hideTs1 from './hide/modal-form.component.ts.txt?raw';
import autofocusHtml from './autofocus/autofocus.component.html?raw';
import autofocusTs from './autofocus/autofocus.component.ts.txt?raw';
import templateHtml from './template/template.component.html?raw';
import templateTs from './template/template.component.ts.txt?raw';
import dialogContentHtml from './template/dialog-content/dialog-content.component.html?raw';
import dialogContentTs from './template/dialog-content/dialog-content.component.ts.txt?raw';
import modalContentHtml from './template/modal-content/modal-content.component.html?raw';
import modalContentTs from './template/modal-content/modal-content.component.ts.txt?raw';
import modalContentScss from './template/modal-content/modal-content.component.scss?raw';
import fixedHtml from './fixed/fixed-wrapper.component.html?raw';
import fixedTs from './fixed/fixed-wrapper.component.ts.txt?raw';
import casesHtml from './cases/cases.component.html?raw';
import casesTs from './cases/cases.component.ts.txt?raw';
import casesHtml1 from './cases/modal-cases.component.html?raw';
import casesTs1 from './cases/modal-cases.component.ts.txt?raw';
import modalTestComponentHtml from './modal-test.component.html?raw';
import modalTestComponentTs from './modal-test.component.ts.txt?raw';

@Component({
  selector: 'd-modal-demo',
  standalone: false,
  templateUrl: './modal-demo.component.html',
  styles: ':host ::ng-deep d-button:not(first-child) { margin-left: 8px }',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ModalDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'Dialog HTML', language: 'xml', code: modalTestComponentHtml },
    { title: 'Dialog TS', language: 'typescript', code: modalTestComponentTs },
  ];
  maximizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: maximizeHtml },
    { title: 'TS', language: 'typescript', code: maximizeTs },
    { title: 'Dialog HTML', language: 'xml', code: modalTestComponentHtml },
    { title: 'Dialog TS', language: 'typescript', code: modalTestComponentTs },
  ];
  basicUpdateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicUpdateHtml },
    { title: 'TS', language: 'typescript', code: basicUpdateTs },
    { title: 'Modal HTML', language: 'xml', code: basicUpdateHtml1 },
    { title: 'Modal TS', language: 'typescript', code: basicUpdateTs1 },
  ];
  customizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customizeHtml },
    { title: 'TS', language: 'typescript', code: customizeTs },
    { title: 'ModalAlert HTML', language: 'xml', code: customizeHtml1 },
    { title: 'ModalAlert TS', language: 'typescript', code: customizeTs1 },
    { title: 'ModalAlert CSS', language: 'css', code: customizeScss },
    { title: 'ModalNoBtn HTML', language: 'xml', code: customizeHtml2 },
    { title: 'ModalNoBtn TS', language: 'typescript', code: customizeTs2 },
    { title: 'ModalNoBtn CSS', language: 'css', code: customizeScss1 },
  ];
  tipsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: tipsHtml },
    { title: 'TS', language: 'typescript', code: tipsTs },
  ];
  hideSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hideHtml },
    { title: 'TS', language: 'typescript', code: hideTs },
    { title: 'Dialog HTML', language: 'xml', code: hideHtml1 },
    { title: 'Dialog CSS', language: 'css', code: hideScss },
    { title: 'Dialog TS', language: 'typescript', code: hideTs1 },
  ];
  autofocusSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: autofocusHtml },
    { title: 'TS', language: 'typescript', code: autofocusTs },
  ];
  templateSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: templateHtml },
    { title: 'TS', language: 'typescript', code: templateTs },
    {
      title: 'Dialog HTML',
      language: 'xml',
      code: dialogContentHtml,
    },
    {
      title: 'Dialog TS',
      language: 'typescript',
      code: dialogContentTs,
    },
    { title: 'Modal HTML', language: 'xml', code: modalContentHtml },
    {
      title: 'Modal TS',
      language: 'typescript',
      code: modalContentTs,
    },
    { title: 'Modal CSS', language: 'css', code: modalContentScss },
  ];
  fixedWrapperSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: fixedHtml },
    { title: 'TS', language: 'typescript', code: fixedTs },
    { title: 'Dialog HTML', language: 'xml', code: modalTestComponentHtml },
    { title: 'Dialog TS', language: 'typescript', code: modalTestComponentTs },
  ];
  casesSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: casesHtml },
    { title: 'TS', language: 'typescript', code: casesTs },
    { title: 'Dialog HTML', language: 'xml', code: casesHtml1 },
    { title: 'Dialog TS', language: 'typescript', code: casesTs1 },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.modal.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.modal.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'standard-dialog', value: values['standard-dialog'] },
      { dAnchorLink: 'maximize-dialog', value: values['maximize-dialog'] },
      { dAnchorLink: 'custom-dialog', value: values['custom-dialog'] },
      { dAnchorLink: 'intercept-dialog-closed', value: values['intercept-dialog-closed'] },
      { dAnchorLink: 'message-hint', value: values['message-hint'] },
      { dAnchorLink: 'update-button-options', value: values['update-button-options'] },
      { dAnchorLink: 'configure-button-to-get-focus-automatically', value: values['configure-button-to-get-focus-automatically'] },
      { dAnchorLink: 'template-content', value: values['template-content'] },
      { dAnchorLink: 'template-fixed', value: values['template-fixed'] },
      { dAnchorLink: 'cases', value: values.cases },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
