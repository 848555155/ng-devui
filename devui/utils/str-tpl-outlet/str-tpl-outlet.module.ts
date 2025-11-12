import { NgModule } from '@angular/core';
import { StrTplOutletDirective } from './str-tpl-outlet.directive';

@NgModule({
  imports: [StrTplOutletDirective],
  exports: [StrTplOutletDirective]
})
export class StrTplOutletModule { }
