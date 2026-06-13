import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RateModule } from 'ng-devui/rate';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { RateDemoBasicComponent } from './basic/basic.component';
import { RateClearComponent } from './clear/rate-clear.component';
import { RateDemoCustomizeComponent } from './customize/customize.component';
import { RateHalfComponent } from './half/rate-half.component';
import { RateDemoOnlyReadComponent } from './onlyread/onlyread.component';
import { RateDemoComponent } from './rate-demo.component';
import { RateDesignComponent } from './rate-design.component';
import { RateDemoTemplateComponent } from './template/template.component';
import { TypeComponent } from './type/type.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslateModule,
    FormsModule,
    CommonModule,
    RateModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: RateDesignComponent,
      },
      { path: 'demo', component: RateDemoComponent },
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
  exports: [RateDemoComponent],
  declarations: [
    RateDemoComponent,
    RateDesignComponent,
    RateDemoBasicComponent,
    RateDemoOnlyReadComponent,
    RateDemoCustomizeComponent,
    RateDemoTemplateComponent,
    TypeComponent,
    RateHalfComponent,
    RateClearComponent
  ],

})
export class RateDemoModule {}
