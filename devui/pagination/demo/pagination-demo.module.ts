import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { PaginationModule } from 'ng-devui/pagination';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { AdditionalComponent } from './additional/additional.component';
import { BasicComponent } from './basic/basic.component';
import { LiteComponent } from './lite/lite.component';
import { PaginationDemoComponent } from './pagination-demo.component';
import { PaginationDesignComponent } from './pagination-design.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    ButtonModule,
    PaginationModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: PaginationDesignComponent,
      },
      { path: 'demo', component: PaginationDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  declarations: [
    PaginationDemoComponent,
    PaginationDesignComponent,
    BasicComponent,
    AdditionalComponent,
    LiteComponent,
    WidgetsComponent
  ],
  exports: [PaginationDemoComponent]
})
export class PaginationDemoModule {
}
