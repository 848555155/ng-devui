import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DrawerModule } from 'ng-devui/drawer';
import { ModalModule } from 'ng-devui/modal';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TextInputModule } from 'ng-devui/text-input';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { DrawerDemoComponent } from './drawer-demo.component';
import { DrawerDesignComponent } from './drawer-design.component';
import { DrawerContentComponent } from './drawerContent/drawer-content.component';
import { ResizeComponent } from './resize/resize.component';
import { TemplateComponent } from './template/template.component';
import { UndestroyableComponent } from './undestroyable/undestroyable.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    DrawerModule,
    CommonModule,
    ButtonModule,
    DevUICodeboxModule,
    DevUIApiModule,
    ModalModule,
    DDemoNavModule,
    TextInputModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: DrawerDesignComponent,
      },
      { path: 'demo', component: DrawerDemoComponent },
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
    DrawerDemoComponent,
    DrawerDesignComponent,
    BasicComponent,
    UndestroyableComponent,
    DrawerContentComponent,
    TemplateComponent,
    ResizeComponent
  ],
  exports: []
})
export class DrawerDemoModule {}
