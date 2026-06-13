import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { StepsGuideModule } from 'ng-devui/steps-guide';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { CustomComponent } from './custom/custom.component';
import { PositionComponent } from './position/position.component';
import { StepsGuideDemoComponent } from './steps-guide-demo.component';
import { StepsGuideDesignComponent } from './steps-guide-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    ButtonModule,
    StepsGuideModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: StepsGuideDesignComponent,
      },
      { path: 'demo', component: StepsGuideDemoComponent },
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
  exports: [StepsGuideDemoComponent, BasicComponent, CustomComponent, PositionComponent],
  declarations: [StepsGuideDemoComponent, StepsGuideDesignComponent, BasicComponent, CustomComponent, PositionComponent],
})
export class StepsGuideDemoModule {}
