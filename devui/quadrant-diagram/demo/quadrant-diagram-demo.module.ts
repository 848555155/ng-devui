import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from 'ng-devui/dragdrop';
import { QuadrantDiagramModule } from 'ng-devui/quadrant-diagram';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { ConfigComponent } from './config/config.component';
import { QuadrantDiagramDemoComponent } from './quadrant-diagram-demo.component';
import { QuadrantDiagramDesignComponent } from './quadrant-diagram-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DragDropModule,
    QuadrantDiagramModule,
    DDemoNavModule,
    TranslatePipe,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: QuadrantDiagramDesignComponent,
      },
      { path: 'demo', component: QuadrantDiagramDemoComponent },
      {
        path: 'api', component: DevUIApiComponent, data: {
          'zh-cn': marked.parse(apiCn),
          'en-us': marked.parse(apiEn)
        }
      }
    ])
  ],
  exports: [
    QuadrantDiagramDemoComponent
  ],
  declarations: [
    BasicComponent,
    QuadrantDiagramDemoComponent,
    QuadrantDiagramDesignComponent,
    ConfigComponent
  ]
})
export class QuadrantDiagramDemoModule { }
