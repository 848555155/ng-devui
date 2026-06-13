import { Component, OnDestroy, OnInit } from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import hoverHtml from './hover/hover.component.html?raw';
import hoverTs from './hover/hover.component.ts.txt?raw';
import hoverScss from './hover/hover.component.scss?raw';
import manuallyHtml from './manually/manually.component.html?raw';
import manuallyTs from './manually/manually.component.ts.txt?raw';
import manuallyScss from './manually/manually.component.scss?raw';
import focusHtml from './focus/focus.component.html?raw';
import focusTs from './focus/focus.component.ts.txt?raw';
import focusScss from './focus/focus.component.scss?raw';
import closeScopeHtml from './close-scope/close-scope.component.html?raw';
import closeScopeTs from './close-scope/close-scope.component.ts.txt?raw';
import closeScopeScss from './close-scope/close-scope.component.scss?raw';
import appendToBodyHtml from './append-to-body/append-to-body.component.html?raw';
import appendToBodyTs from './append-to-body/append-to-body.component.ts.txt?raw';
import appendToBodyScss from './append-to-body/append-to-body.component.scss?raw';
import addIconHtml from './add-icon/add-icon.component.html?raw';
import addIconTs from './add-icon/add-icon.component.ts.txt?raw';
import multiLevelHtml from './multi-level/multi-level.component.html?raw';
import multiLevelTs from './multi-level/multi-level.component.ts.txt?raw';
import multiLevelScss from './multi-level/multi-level.component.scss?raw';
import setIsOpenHtml from './set-is-open/dropdown-set-is-open.component.html?raw';
import setIsOpenTs from './set-is-open/dropdown-set-is-open.component.ts.txt?raw';
import setIsOpenScss from './set-is-open/dropdown-set-is-open.component.scss?raw';

@Component({
  selector: 'd-demo-dropdown',
  templateUrl: './dropdown-demo.component.html',
  styles: [
    `
      :host ::ng-deep .icon-chevron-down-2 {
        font-size: 14px !important;
        vertical-align: middle;
      }
    `,
  ],
  standalone: false
})
export class DropdownDemoComponent implements OnInit, OnDestroy {
  basicSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
  ];
  hoverSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: hoverHtml },
    { title: 'TS', language: 'typescript', code: hoverTs },
    { title: 'SCSS', language: 'css', code: hoverScss },
  ];
  manuallySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: manuallyHtml },
    { title: 'TS', language: 'typescript', code: manuallyTs },
    { title: 'SCSS', language: 'css', code: manuallyScss },
  ];
  focusSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: focusHtml },
    { title: 'TS', language: 'typescript', code: focusTs },
    { title: 'SCSS', language: 'css', code: focusScss },
  ];
  closeScopeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: closeScopeHtml },
    { title: 'TS', language: 'typescript', code: closeScopeTs },
    { title: 'SCSS', language: 'css', code: closeScopeScss },
  ];
  appendToBodySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: appendToBodyHtml },
    { title: 'TS', language: 'typescript', code: appendToBodyTs },
    { title: 'SCSS', language: 'css', code: appendToBodyScss },
  ];
  addIconSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: addIconHtml },
    { title: 'TS', language: 'typescript', code: addIconTs },
  ];
  multiLevelSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: multiLevelHtml },
    { title: 'TS', language: 'typescript', code: multiLevelTs },
    { title: 'SCSS', language: 'css', code: multiLevelScss },
  ];

  dropdownDemoSetIsOpen: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: setIsOpenHtml },
    { title: 'TS', language: 'typescript', code: setIsOpenTs },
    { title: 'SCSS', language: 'css', code: setIsOpenScss },
  ];
  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.dropdown.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.dropdown.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'turn-off-trigger-point-settings', value: values['turn-off-trigger-point-settings'] },
      { dAnchorLink: 'suspension-drop-down', value: values['suspension-drop-down'] },
      { dAnchorLink: 'manually-control', value: values['manually-control'] },
      { dAnchorLink: 'dropdown-set-is-open', value: values['dropdown-set-is-open'] },
      { dAnchorLink: 'auto-expand-and-auto-focus', value: values['auto-expand-and-auto-focus'] },
      { dAnchorLink: 'when-using-appendtobody', value: values['when-using-appendtobody'] },
      { dAnchorLink: 'add-icon', value: values['add-icon'] },
      { dAnchorLink: 'multi-level-drop-down-menu', value: values['multi-level-drop-down-menu'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
