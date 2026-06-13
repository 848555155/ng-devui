import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import labelHorizontalHtml from './label-horizontal/label-horizontal.component.html?raw';
import labelHorizontalTs from './label-horizontal/label-horizontal.component.ts.txt?raw';
import labelHorizontalCss from './label-horizontal/label-horizontal.component.css?raw';
import modalHtml from './modal/modal.component.html?raw';
import modalTs from './modal/modal.component.ts.txt?raw';
import modalCss from './modal/modal.component.css?raw';
import modalOneHtml from './modal-one/modal-one.component.html?raw';
import modalOneTs from './modal-one/modal-one.component.ts.txt?raw';
import multiColHtml from './multi-col/multi-col.component.html?raw';
import multiColTs from './multi-col/multi-col.component.ts.txt?raw';
import multiColCss from './multi-col/multi-col.component.css?raw';
import innerValidatorHtml from './validate-template/inner-validator/inner-validator.component.html?raw';
import innerValidatorTs from './validate-template/inner-validator/inner-validator.component.ts.txt?raw';
import customValidatorHtml from './validate-template/custom-validator/custom-validator.component.html?raw';
import customValidatorTs from './validate-template/custom-validator/custom-validator.component.ts.txt?raw';
import errorStrategyHtml from './validate-template/error-strategy/error-strategy.component.html?raw';
import errorStrategyTs from './validate-template/error-strategy/error-strategy.component.ts.txt?raw';
import customMessageShowHtml from './validate-template/custom-message-show/custom-message-show.component.html?raw';
import customMessageShowTs from './validate-template/custom-message-show/custom-message-show.component.ts.txt?raw';
import customMessageShowScss from './validate-template/custom-message-show/custom-message-show.component.scss?raw';
import debounceTimeHtml from './validate-template/debounce-time/debounce-time.component.html?raw';
import debounceTimeTs from './validate-template/debounce-time/debounce-time.component.ts.txt?raw';
import validateTemplateFormHtml from './validate-template/validate-template-form/validate-template-form.component.html?raw';
import validateTemplateFormTs from './validate-template/validate-template-form/validate-template-form.component.ts.txt?raw';
import userRegisterHtml from './validate-template/user-register/user-register.component.html?raw';
import userRegisterTs from './validate-template/user-register/user-register.component.ts.txt?raw';
import validateCrossComponentHtml from './validate-template/validate-cross-component/validate-cross-component.component.html?raw';
import validateCrossComponentTs from './validate-template/validate-cross-component/validate-cross-component.component.ts.txt?raw';
import childFormHtml from './validate-template/validate-cross-component/child-form/child-form.component.html?raw';
import childFormTs from './validate-template/validate-cross-component/child-form/child-form.component.ts.txt?raw';
import validateCrossComponentHtml1 from './validate-cross-component/validate-cross-component.component.html?raw';
import validateCrossComponentTs1 from './validate-cross-component/validate-cross-component.component.ts.txt?raw';
import childControlHtml from './validate-cross-component/child-control/child-user.component.html?raw';
import childControlTs from './validate-cross-component/child-control/child-user.component.ts.txt?raw';
import customStatusHtml from './custom-status/custom-status.component.html?raw';
import customStatusTs from './custom-status/custom-status.component.ts.txt?raw';
import validateReactiveHtml from './validate-reactive/validate-reactive.component.html?raw';
import validateReactiveTs from './validate-reactive/validate-reactive.component.ts.txt?raw';
import validateReactiveScss from './validate-reactive/validate-reactive.component.scss?raw';
import validateSyncHtml from './validate-sync/validate-sync.component.html?raw';
import validateSyncTs from './validate-sync/validate-sync.component.ts.txt?raw';
import validateDynamicRuleHtml from './validate-dynamic-rule/validate-dynamic-rule.component.html?raw';
import validateDynamicRuleTs from './validate-dynamic-rule/validate-dynamic-rule.component.ts.txt?raw';
import validateUpdateHtml from './validate-update/validate-update.component.html?raw';
import validateUpdateTs from './validate-update/validate-update.component.ts.txt?raw';

@Component({
  selector: 'd-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
  standalone: false
})
export class FormDemoComponent implements OnInit, OnDestroy {
  BasicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicCss },
  ];
  LabelHorizontalSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: labelHorizontalHtml },
    { title: 'TS', language: 'typescript', code: labelHorizontalTs },
    { title: 'SCSS', language: 'css', code: labelHorizontalCss },
  ];
  ModalSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: modalHtml },
    { title: 'TS', language: 'typescript', code: modalTs },
    { title: 'SCSS', language: 'css', code: modalCss },
    { title: 'ModalOne HTML', language: 'xml', code: modalOneHtml },
    { title: 'ModalOne TS', language: 'typescript', code: modalOneTs },
  ];
  MultiColSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiColHtml },
    { title: 'TS', language: 'typescript', code: multiColTs },
    { title: 'SCSS', language: 'css', code: multiColCss },
  ];

  InnerValidatorSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: innerValidatorHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: innerValidatorTs,
    },
  ];
  CustomValidatorSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: customValidatorHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: customValidatorTs,
    },
  ];
  ErrorStrategySource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: errorStrategyHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: errorStrategyTs,
    },
  ];
  CustomMessageShowSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: customMessageShowHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: customMessageShowTs,
    },
    {
      title: 'SCSS',
      language: 'css',
      code: customMessageShowScss,
    },
  ];
  DebounceTimeSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: debounceTimeHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: debounceTimeTs,
    },
  ];
  ValidateTemplateForm: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: validateTemplateFormHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: validateTemplateFormTs,
    },
  ];
  UserRegisterShowSource: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: userRegisterHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: userRegisterTs,
    },
  ];
  ValidateTemplateCrossComponent: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: validateCrossComponentHtml,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: validateCrossComponentTs,
    },
    {
      title: 'child-group.html',
      language: 'xml',
      code: childFormHtml,
    },
    {
      title: 'child-group.ts',
      language: 'typescript',
      code: childFormTs,
    },
  ];

  ReactiveFormCrossComponent: Array<DevuiSourceData> = [
    {
      title: 'HTML',
      language: 'xml',
      code: validateCrossComponentHtml1,
    },
    {
      title: 'TS',
      language: 'typescript',
      code: validateCrossComponentTs1,
    },
    {
      title: 'child.html',
      language: 'xml',
      code: childControlHtml,
    },
    {
      title: 'child.ts',
      language: 'typescript',
      code: childControlTs,
    },
  ];

  ValidateCustomStatus: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: customStatusHtml },
    { title: 'TS', language: 'typescript', code: customStatusTs },
  ];

  ValidateReactiveSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: validateReactiveHtml },
    { title: 'TS', language: 'typescript', code: validateReactiveTs },
    { title: 'SCSS', language: 'css', code: validateReactiveScss },
  ];

  ValidateSyncSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: validateSyncHtml },
    { title: 'TS', language: 'typescript', code: validateSyncTs },
  ];

  ValidateDynamicRuleSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: validateDynamicRuleHtml },
    { title: 'TS', language: 'typescript', code: validateDynamicRuleTs },
  ];

  ValidateUpdate: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: validateUpdateHtml },
    { title: 'TS', language: 'typescript', code: validateUpdateTs },
  ];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.form.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.form.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'demo-label-horizontal', value: values['demo-label-horizontal'] },
      { dAnchorLink: 'demo-modal', value: values['demo-modal'] },
      { dAnchorLink: 'demo-multi-col', value: values['demo-multi-col'] },
      { dAnchorLink: 'demo-inner-validator', value: values['demo-inner-validator'] },
      { dAnchorLink: 'demo-custom-validator', value: values['demo-custom-validator'] },
      { dAnchorLink: 'demo-error-strategy', value: values['demo-error-strategy'] },
      { dAnchorLink: 'demo-custom-message', value: values['demo-custom-message'] },
      { dAnchorLink: 'demo-debounce-time', value: values['demo-debounce-time'] },
      { dAnchorLink: 'demo-validate-template', value: values['demo-validate-template'] },
      { dAnchorLink: 'demo-user-register', value: values['demo-user-register'] },
      { dAnchorLink: 'demo-validate-reactive', value: values['demo-validate-reactive'] },
      { dAnchorLink: 'demo-custom-status', value: values['demo-custom-status'] },
      { dAnchorLink: 'demo-validate-sync', value: values['demo-validate-sync'] },
      { dAnchorLink: 'demo-validate-cross-component', value: values['demo-validate-cross-component'] },
      { dAnchorLink: 'demo-validate-update', value: values['demo-validate-update'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
