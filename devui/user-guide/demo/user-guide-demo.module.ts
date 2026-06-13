import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { UserGuideModule } from 'ng-devui/user-guide';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { ServiceWayComponent } from './service-way/service-way.component';
import { UserGuideDemoComponent } from './user-guide-demo.component';
import { UserGuideDesignComponent } from './user-guide-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    DevUIApiModule,
    UserGuideModule,
    DevUICodeboxModule,
    DDemoNavModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: UserGuideDesignComponent,
      },
      { path: 'demo', component: UserGuideDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  declarations: [
    UserGuideDemoComponent,
    UserGuideDesignComponent,
    BasicComponent,
    ServiceWayComponent
  ]
})
export class UserGuideDemoModule { }
