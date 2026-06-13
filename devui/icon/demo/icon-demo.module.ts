import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'ng-devui/data-table';
import { DropDownModule } from 'ng-devui/dropdown';
import { I18nModule } from 'ng-devui/i18n';
import { IconModule } from 'ng-devui/icon';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { BasicComponent } from './basic/basic.component';
import { IconDemoComponent } from './icon-demo.component';
import { IconDesignComponent } from './icon-design.component';
import { IconGroupDemoComponent } from './icon-group/icon-group.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    DDemoNavModule,
    DevUICodeboxModule,
    IconModule,
    FormsModule,
    I18nModule,
    DataTableModule,
    DropDownModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: IconDesignComponent,
      },
      { path: 'demo', component: IconDemoComponent },
      {
        path: 'api',
        component: DevUIApiComponent,
        data: {
          'zh-cn': marked.parse(apiCn),
          'en-us': marked.parse(apiEn),
        },
      },
    ]),
    BasicComponent,
    IconGroupDemoComponent,
  ],
  declarations: [IconDemoComponent],
})
export class IconDemoModule {}
