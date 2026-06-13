import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormModule } from 'ng-devui';
import { SearchModule } from 'ng-devui/search';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { AutoFocusComponent } from './auto-focus/auto-focus.component';
import { BasicComponent } from './basic/basic.component';
import { IconLeftComponent } from './icon-left/icon-left.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { SearchNoBorderComponent } from './no-border/search-no-border.component';
import { SearchDemoComponent } from './search-demo.component';
import { SearchDesignComponent } from './search-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    FormsModule,
    SearchModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
    FormModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: SearchDesignComponent,
      },
      { path: 'demo', component: SearchDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  declarations: [
    SearchDemoComponent,
    SearchDesignComponent,
    BasicComponent,
    IconLeftComponent,
    NgmodelComponent,
    AutoFocusComponent,
    SearchNoBorderComponent
  ],
  exports: [SearchDemoComponent]
})
export class SearchDemoModule {
}
