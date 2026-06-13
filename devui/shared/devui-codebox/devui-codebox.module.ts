import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ng-devui/tabs';
import { TooltipModule } from 'ng-devui/tooltip';
import { TranslatePipe } from '@ngx-translate/core';
import { DevUIHighlightModule } from '../devui-highlight/devui-highlight.module';
import { DevuiCodeboxComponent } from './devui-codebox.component';

@NgModule({
  imports: [
    CommonModule,
    DevUIHighlightModule,
    TooltipModule,
    TabsModule,
    TranslatePipe
  ],
  declarations: [DevuiCodeboxComponent],
  exports: [DevuiCodeboxComponent]
})
export class DevUICodeboxModule { }
