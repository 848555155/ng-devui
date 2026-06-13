import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckBoxModule } from 'ng-devui/checkbox';
import { SelectModule } from 'ng-devui/select';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { CheckboxBasicComponent } from './basic/checkbox-basic.component';
import { CheckBoxDemoComponent } from './checkbox-demo.component';
import { CheckboxDesignComponent } from './checkbox-design.component';
import { CheckboxConditionChangeComponent } from './condition-change/condition-change.component';
import { CheckboxConditionGroupComponent } from './condition-group/condition-group.component';
import { CheckboxGroupBasicComponent } from './group/checkbox-group-basic.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    FormsModule,
    CheckBoxModule,
    SelectModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: CheckboxDesignComponent,
      },
      { path: 'demo', component: CheckBoxDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  declarations: [
    CheckBoxDemoComponent,
    CheckboxDesignComponent,
    CheckboxBasicComponent,
    CheckboxGroupBasicComponent,
    CheckboxConditionChangeComponent,
    CheckboxConditionGroupComponent
  ],
  exports: [CheckBoxDemoComponent]
})
export class CheckBoxDemoModule {
}
