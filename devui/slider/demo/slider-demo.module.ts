import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { SliderModule } from 'ng-devui/slider';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { SliderBasicComponent } from './basic/slider-basic.component';
import { SliderCustomFormatterComponent } from './custom-formatter/slider-custom-formatter.component';
import { SliderDisabledComponent } from './disabled/slider-disabled.component';
import { SliderDemoComponent } from './slider-demo.component';
import { SliderDesignComponent } from './slider-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    DevUICodeboxModule,
    SliderModule,
    DevUIApiModule,
    FormsModule,
    DDemoNavModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'demo', pathMatch: 'full'},
      {
        path: 'design',
        component: SliderDesignComponent,
      },
      {path: 'demo', component: SliderDemoComponent},
      {
        path: 'api', component: DevUIApiComponent, data: {
          'zh-cn': marked.parse(apiCn),
          'en-us': marked.parse(apiEn)
        }
      }
    ])
  ],
  exports: [SliderDemoComponent],
  declarations: [
    SliderDemoComponent,
    SliderDesignComponent,
    SliderBasicComponent,
    SliderDisabledComponent,
    SliderCustomFormatterComponent
  ],
})
export class SliderDemoModule {
}
