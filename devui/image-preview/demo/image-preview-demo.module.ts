import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { ImagePreviewModule } from 'ng-devui/image-preview';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { SafePipeModule } from 'ng-devui/utils';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { CustomOpenComponent } from './custom-open/custom-open.component';
import { DImagePreviewDemoComponent } from './image-preview-demo.component';
import { ImagePreviewDesignComponent } from './image-preview-design.component';
import { ZIndexComponent } from './z-index/z-index.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    FormsModule,
    ImagePreviewModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    SafePipeModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: ImagePreviewDesignComponent,
      },
      { path: 'demo', component: DImagePreviewDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  declarations: [
    DImagePreviewDemoComponent,
    ImagePreviewDesignComponent,
    BasicComponent,
    CustomOpenComponent,
    ZIndexComponent
  ],
  exports: [DImagePreviewDemoComponent]
})
export class ImagePreviewDemoModule { }
