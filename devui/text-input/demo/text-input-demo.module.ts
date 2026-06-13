import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormModule } from 'ng-devui/form';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TextInputModule } from 'ng-devui/text-input';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { PasswordVisibleComponent } from './password-visible/password-visible.component';
import { TextInputSizeComponent } from './size/text-input-size.component';
import { TextInputDemoComponent } from './text-input-demo.component';
import { TextInputDesignComponent } from './text-input-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    TextInputModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: TextInputDesignComponent,
      },
      { path: 'demo', component: TextInputDemoComponent },
      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': marked.parse(apiCn),
          'en-us': marked.parse(apiEn),
        },
      },
    ]),
    FormModule,
  ],
  exports: [TextInputDemoComponent],
  declarations: [TextInputDemoComponent, TextInputDesignComponent, BasicComponent, PasswordVisibleComponent, TextInputSizeComponent],

})
export class TextInputDemoModule {}
