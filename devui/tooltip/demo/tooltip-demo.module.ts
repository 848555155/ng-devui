import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TooltipModule } from 'ng-devui/tooltip';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { DelayComponent } from './delay/delay.component';
import { TooltipDemoComponent } from './tooltip-demo.component';
import { TooltipDesignComponent } from './tooltip-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    TooltipModule,
    DevUICodeboxModule,
    ButtonModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: TooltipDesignComponent,
      },
      { path: 'demo', component: TooltipDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  exports: [TooltipDemoComponent],
  declarations: [
    TooltipDemoComponent,
    TooltipDesignComponent,
    BasicComponent,
    DelayComponent
  ],

})
export class TooltipDemoModule {
}
