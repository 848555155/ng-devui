import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'ng-devui/utils';
import { TimeAxisItemComponent } from './time-axis-item/time-axis-item.component';
import { TimeAxisComponent } from './time-axis.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SafePipeModule
  ],
  declarations: [
    TimeAxisComponent,
    TimeAxisItemComponent
  ],
  providers: [],
  exports: [
    TimeAxisComponent,
    TimeAxisItemComponent
  ]
})
export class TimeAxisModule {}
