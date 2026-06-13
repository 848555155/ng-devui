import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { ToastModule } from 'ng-devui/toast';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { AppendComponent } from './append/append.component';
import { BasicComponent } from './basic/basic.component';
import { LifeComponent } from './life/life.component';
import { ToastServiceComponent } from './service/toast-service.component';
import { SingleComponent } from './single/single.component';
import { StyleComponent } from './style/style.component';
import { ToastDemoComponent } from './toast-demo.component';
import { ToastDesignComponent } from './toast-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: ToastDesignComponent,
      },
      { path: 'demo', component: ToastDemoComponent },
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
  exports: [ToastDemoComponent],
  declarations: [
    ToastDemoComponent,
    ToastDesignComponent,
    BasicComponent,
    LifeComponent,
    SingleComponent,
    StyleComponent,
    AppendComponent,
    ToastServiceComponent,
  ],

})
export class ToastDemoModule {}
