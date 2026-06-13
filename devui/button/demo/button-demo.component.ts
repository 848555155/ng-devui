import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AnchorModule } from 'ng-devui/anchor';
import { DevUICodeboxModule, DevuiSourceData } from 'ng-devui/shared/devui-codebox';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { merge } from 'rxjs';
import { AutofocusComponent } from './autofocus/autofocus.component';
import { CombinationComponent } from './combination/combination.component';
import { CommonComponent } from './common/common.component';
import { DangerComponent } from './danger/danger.component';
import { GroupsComponent } from './groups/groups.component';
import { IconComponent } from './icon/icon.component';
import { LoadingComponent } from './loading/loading.component';
import { PrimaryComponent } from './primary/primary.component';
import { SizeComponent } from './size/size.component';
import { TextComponent } from './text/text.component';
import commonHtml from './common/common.component.html?raw';
import commonTs from './common/common.component.ts.txt?raw';
import iconHtml from './icon/icon.component.html?raw';
import iconTs from './icon/icon.component.ts.txt?raw';
import iconScss from './icon/icon.component.scss?raw';
import loadingHtml from './loading/loading.component.html?raw';
import loadingTs from './loading/loading.component.ts.txt?raw';
import primaryHtml from './primary/primary.component.html?raw';
import primaryTs from './primary/primary.component.ts.txt?raw';
import textHtml from './text/text.component.html?raw';
import textTs from './text/text.component.ts.txt?raw';
import dangerHtml from './danger/danger.component.html?raw';
import dangerTs from './danger/danger.component.ts.txt?raw';
import combinationHtml from './combination/combination.component.html?raw';
import combinationTs from './combination/combination.component.ts.txt?raw';
import autofocusHtml from './autofocus/autofocus.component.html?raw';
import autofocusTs from './autofocus/autofocus.component.ts.txt?raw';
import sizeHtml from './size/size.component.html?raw';
import sizeTs from './size/size.component.ts.txt?raw';
import groupsHtml from './groups/groups.component.html?raw';
import groupsTs from './groups/groups.component.ts.txt?raw';
import groupsScss from './groups/groups.component.scss?raw';

@Component({
  selector: 'd-demo-button',
  imports: [
    TranslatePipe,
    AnchorModule,
    DevUICodeboxModule,
    DDemoNavModule,
    CommonComponent,
    DangerComponent,
    IconComponent,
    LoadingComponent,
    PrimaryComponent,
    SizeComponent,
    TextComponent,
    CombinationComponent,
    AutofocusComponent,
    GroupsComponent,
  ],
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {
  private translate = inject(TranslateService);

  commonSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: commonHtml },
    { title: 'TS', language: 'typescript', code: commonTs },
  ];
  iconSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: iconHtml },
    { title: 'TS', language: 'typescript', code: iconTs },
    { title: 'SCSS', language: 'css', code: iconScss },
  ];
  loadingSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: loadingHtml },
    { title: 'TS', language: 'typescript', code: loadingTs },
  ];
  primarySource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: primaryHtml },
    { title: 'TS', language: 'typescript', code: primaryTs },
  ];
  textSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: textHtml },
    { title: 'TS', language: 'typescript', code: textTs },
  ];
  dangerSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: dangerHtml },
    { title: 'TS', language: 'typescript', code: dangerTs },
  ];
  combinationSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: combinationHtml },
    { title: 'TS', language: 'typescript', code: combinationTs },
  ];
  autofocusSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: autofocusHtml },
    { title: 'TS', language: 'typescript', code: autofocusTs },
  ];
  sizeSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: sizeHtml },
    { title: 'TS', language: 'typescript', code: sizeTs },
  ];
  groupsSource: Array<DevuiSourceData> = [
    { title: 'HTML', language: 'xml', code: groupsHtml },
    { title: 'TS', language: 'typescript', code: groupsTs },
    { title: 'SCSS', language: 'css', code: groupsScss },
  ];

  navItems: Array<{ dAnchorLink: string; value: string }> = [];

  constructor() {
    merge(
      this.translate.get('components.button.anchorLinkValues'),
      this.translate.onLangChange
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const values = this.translate.instant('components.button.anchorLinkValues');
        this.setNavValues(values);
      });
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'button-primary', value: values['button-primary'] },
      { dAnchorLink: 'button-common', value: values['button-common'] },
      { dAnchorLink: 'button-primary-and-common', value: values['button-primary-and-common'] },
      { dAnchorLink: 'button-danger', value: values['button-danger'] },
      { dAnchorLink: 'button-text', value: values['button-text'] },
      { dAnchorLink: 'button-loading', value: values['button-loading'] },
      { dAnchorLink: 'button-auto-focus', value: values['button-auto-focus'] },
      { dAnchorLink: 'button-icon', value: values['button-icon'] },
      { dAnchorLink: 'button-size', value: values['button-size'] },
      { dAnchorLink: 'button-groups', value: values['button-groups'] },
    ];
  }
}
