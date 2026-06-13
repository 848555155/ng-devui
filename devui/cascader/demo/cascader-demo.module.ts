import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { CascaderModule } from 'ng-devui/cascader';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TabsModule } from 'ng-devui/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { CascaderDemoComponent } from './cascader-demo.component';
import { CascaderDesignComponent } from './cascader-design.component';
import { CascaderHeaderTemplateComponent } from './header-template/cascader-header-template.component';
import { LazyloadCascaderComponent } from './lazyload-cascader/lazyload-cascader.component';
import { MultipleCascaderComponent } from './multiple-cascader/multiple-cascader.component';
import { ParentSelectCascaderComponent } from './parent-select-cascader/parent-select-cascader.component';
import { SearchCascaderComponent } from './search-cascader/search-cascader.component';
import { TemplateCascaderComponent } from './template-cascader/template-cascader.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    DevUICodeboxModule,
    DevUIApiModule,
    CascaderModule,
    FormsModule,
    DDemoNavModule,
    ButtonModule,
    TabsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: CascaderDesignComponent,
      },
      { path: 'demo', component: CascaderDemoComponent },
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
  exports: [],
  declarations: [
    BasicComponent,
    CascaderDemoComponent,
    CascaderDesignComponent,
    MultipleCascaderComponent,
    SearchCascaderComponent,
    TemplateCascaderComponent,
    LazyloadCascaderComponent,
    ParentSelectCascaderComponent,
    CascaderHeaderTemplateComponent,
  ],
})
export class CascaderDemoModule {}
