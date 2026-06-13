import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RateComponent } from './rate.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RateComponent],
  providers: [],
  exports: [RateComponent]
})
export class RateModule { }
