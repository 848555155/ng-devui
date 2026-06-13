import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ng-devui/avatar';
import { CardModule } from 'ng-devui/card';
import { ReadTipModule } from 'ng-devui/read-tip';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { ReadtipAsyncComponent } from './async-readtip/readtip-async.component';
import { BasicComponent } from './basic/basic.component';
import { MultiReadtipComponent } from './multi-readtip/multi-readtip.component';
import { ReadTipDemoComponent } from './read-tip-demo.component';
import { ReadTipDesignComponent } from './read-tip-design.component';
import { ReadtipTemplateComponent } from './readtip-template/readtip-template.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    CardModule,
    AvatarModule,
    ReadTipModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: ReadTipDesignComponent,
      },
      { path: 'demo', component: ReadTipDemoComponent },
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
    ReadTipDemoComponent,
    ReadTipDesignComponent,
    BasicComponent,
    MultiReadtipComponent,
    ReadtipTemplateComponent,
    ReadtipAsyncComponent,
  ],
  exports: [ReadTipDemoComponent]
})
export class ReadTipDemoModule {}
