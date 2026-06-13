import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { FormModule } from 'ng-devui/form';
import { ModalModule } from 'ng-devui/modal';
import { PopoverModule } from 'ng-devui/popover';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TextInputModule } from 'ng-devui/text-input';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { AutofocusComponent } from './autofocus/autofocus.component';
import { BasicUpdateComponent } from './basic-update/basic-update.component';
import { BasicComponent } from './basic/basic.component';
import { CasesComponent } from './cases/cases.component';
import { ModalCasesComponent } from './cases/modal-cases.component';
import { CustomizeComponent } from './customize/customize.component';
import { ModalAlertComponent } from './customize/modal-alert.component';
import { ModalNoBtnComponent } from './customize/modal-no-btn.component';
import { FixedWrapperComponent } from './fixed/fixed-wrapper.component';
import { HideComponent } from './hide/hide.component';
import { ModalFormComponent } from './hide/modal-form.component';
import { MaximizeComponent } from './maximize/maximize.component';
import { ModalDemoComponent } from './modal-demo.component';
import { ModalDesignComponent } from './modal-design.component';
import { ModalTestComponent } from './modal-test.component';
import { DialogContentComponent } from './template/dialog-content/dialog-content.component';
import { ModalContentComponent } from './template/modal-content/modal-content.component';
import { TemplateComponent } from './template/template.component';
import { TipsComponent } from './tips/tips.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    FormsModule,
    TranslatePipe,
    CommonModule,
    ModalModule,
    ButtonModule,
    PopoverModule,
    FormModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    TextInputModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: ModalDesignComponent,
      },
      { path: 'demo', component: ModalDemoComponent },
      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': marked.parse(apiCn),
          'en-us': marked.parse(apiEn),
        },
      },
    ]),
  ],
  declarations: [
    ModalDemoComponent,
    ModalDesignComponent,
    ModalTestComponent,
    ModalAlertComponent,
    ModalNoBtnComponent,
    BasicComponent,
    MaximizeComponent,
    CustomizeComponent,
    TipsComponent,
    HideComponent,
    ModalFormComponent,
    AutofocusComponent,
    TemplateComponent,
    DialogContentComponent,
    ModalContentComponent,
    BasicUpdateComponent,
    FixedWrapperComponent,
    CasesComponent,
    ModalCasesComponent
  ],
})
export class ModalDemoModule {}
