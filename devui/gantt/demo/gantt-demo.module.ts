import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DevUIModule } from 'ng-devui';
import { DataTableModule } from 'ng-devui/data-table';
import { FullscreenModule } from 'ng-devui/fullscreen';
import { GanttModule } from 'ng-devui/gantt';
import { I18nModule } from 'ng-devui/i18n';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { GanttDemoComponent } from './gantt-demo.component';
import { GanttDesignComponent } from './gantt-design.component';
import { ResetPositionComponent } from './table/reset-position/reset-position.component';
import { TableComponent } from './table/table.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
@NgModule({
  declarations: [GanttDemoComponent, BasicComponent, ResetPositionComponent, TableComponent],
  imports: [
    CommonModule,
    DevUIApiModule,
    DataTableModule,
    GanttModule,
    DevUIModule,
    DevUICodeboxModule,
    I18nModule,
    DDemoNavModule,
    TranslatePipe,
    FullscreenModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: GanttDesignComponent,
      },
      { path: 'demo', component: GanttDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ]
})
export class GanttDemoModule { }
