import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DevUIModule } from 'ng-devui';
import { DataTableModule } from 'ng-devui/data-table';
import { MultiAutoCompleteModule } from 'ng-devui/multi-auto-complete';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { MultiAutoCompleteDemoArrayComponent } from './array/multi-auto-complete-demo-array.component';
import { MultiAutoCompleteDemoDefaultComponent } from './default/multi-auto-complete-demo-default.component';
import { MultiAutoCompleteDemoDisabledComponent } from './disabled/multi-auto-complete-demo-disabled.component';
import { MultiAutoCompleteDemoComponent } from './multi-auto-complete-demo.component';
import { MultiAutoCompleteDesignComponent } from './multi-auto-complete-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    MultiAutoCompleteModule,
    FormsModule,
    DevUIModule,
    DevUIApiModule,
    DataTableModule,
    DevUICodeboxModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: MultiAutoCompleteDesignComponent,
      },
      { path: 'demo', component: MultiAutoCompleteDemoComponent },
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
    MultiAutoCompleteDemoComponent,
    MultiAutoCompleteDesignComponent,
    MultiAutoCompleteDemoDefaultComponent,
    MultiAutoCompleteDemoArrayComponent,
    MultiAutoCompleteDemoDisabledComponent,
  ],
  providers: [],
  exports: [MultiAutoCompleteDemoComponent]
})
export class MultiAutoCompleteDemoModule {}
