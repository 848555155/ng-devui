import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'ng-devui/data-table';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { ToggleModule } from 'ng-devui/toggle';
import { TransferModule } from 'ng-devui/transfer';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { TransferDemoBaseComponent } from './basic/transfer-demo-base.component';
import { TransferDemoCustomComponent } from './custom/transfer-demo-custom.component';
import { TransferDemoSearchComponent } from './search/transfer-demo-search.component';
import { TransferDemoSortComponent } from './sort/transfer-demo-sort.component';
import { TransferDemoComponent } from './transfer-demo.component';
import { TransferDesignComponent } from './transfer-design.component';
import { TransferVirtualScrollComponent } from './virtual-scroll/transfer-virtual-scroll.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    TransferModule,
    DataTableModule,
    ToggleModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: TransferDesignComponent,
      },
      { path: 'demo', component: TransferDemoComponent },
      { path: 'api', component: DevUIApiComponent, data: {
        'zh-cn': marked.parse(apiCn),
        'en-us': marked.parse(apiEn)
      }}
    ])
  ],
  exports: [TransferDemoComponent],
  declarations: [
    TransferDemoComponent,
    TransferDesignComponent,
    TransferDemoSearchComponent,
    TransferDemoBaseComponent,
    TransferDemoCustomComponent,
    TransferDemoSortComponent,
    TransferVirtualScrollComponent
  ]
})
export class TransferDemoModule { }
