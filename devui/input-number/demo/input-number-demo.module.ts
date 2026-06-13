import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'ng-devui/input-number';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { TranslatePipe } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { InputNumberBasicComponent } from './basic/input-number-basic.component';
import { DecimalLimitComponent } from './decimalLimit/decimal-limit.component';
import { InputNumberDisabledComponent } from './disabled/input-number-disabled.component';
import { InputNumberEmptyComponent } from './empty/input-number-empty.component';
import { InputNumberDemoComponent } from './input-number-demo.component';
import { InputNumberDesignComponent } from './input-number-design.component';
import { InputNumberPlaceholderAndMaxLengthComponent } from './placeholderAndMaxLength/input-number-placeholder-maxLength.component';
import { InputNumberRegComponent } from './reg/input-number-reg.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    TranslatePipe,
    CommonModule,
    DevUIApiModule,
    DevUICodeboxModule,
    InputNumberModule,
    FormsModule,
    DDemoNavModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'design',
        component: InputNumberDesignComponent,
      },
      { path: 'demo', component: InputNumberDemoComponent },
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
  exports: [InputNumberDemoComponent],
  declarations: [
    InputNumberDemoComponent,
    InputNumberDesignComponent,
    InputNumberBasicComponent,
    InputNumberDisabledComponent,
    InputNumberEmptyComponent,
    InputNumberPlaceholderAndMaxLengthComponent,
    InputNumberRegComponent,
    DecimalLimitComponent,
  ],
})
export class InputNumberDemoModule {}
