import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'ng-devui/data-table';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TabsModule } from 'ng-devui/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BorderRadiusDesignComponent } from './border-radius-design.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { DesignBorderRadiusDemoComponent } from './design-border-radius-demo.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
@NgModule({
  declarations: [DesignBorderRadiusDemoComponent, BorderRadiusComponent],
  imports: [
    TranslateModule,
    CommonModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DataTableModule,
    DDemoNavModule,
    TabsModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: BorderRadiusDesignComponent,
      },
      { path: 'demo', component: DesignBorderRadiusDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ]
})
export class DesignBorderRadiusDemoModule { }
