import { NgModule } from '@angular/core';
import { NumberTransPipe } from './number-translation.pipe';

@NgModule({
  imports: [NumberTransPipe],
  exports: [NumberTransPipe],
})
export class NumberTransModule {}
