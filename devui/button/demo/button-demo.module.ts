import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'ng-devui/button';
import { DropDownModule } from 'ng-devui/dropdown';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { ButtonDemoComponent } from './button-demo.component';
import { ButtonDesignComponent } from './button-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropDownModule,
    DevUIApiModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'design', component: ButtonDesignComponent },
      { path: 'demo', component: ButtonDemoComponent },
      { path: 'api', component: DevUIApiComponent, data: { 'zh-cn': marked.parse(apiCn), 'en-us': marked.parse(apiEn) } },
    ]),
    ButtonDemoComponent,
    ButtonDesignComponent,
  ],
  exports: [ButtonDemoComponent],
})
export class ButtonDemoModule {}
