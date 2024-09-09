import { NgModule } from '@angular/core';
import { CheckBoxGroupComponent } from './checkbox-group.component';
import { CheckBoxComponent } from './checkbox.component';

@NgModule({
  imports: [CheckBoxComponent, CheckBoxGroupComponent],
  exports: [CheckBoxComponent, CheckBoxGroupComponent],
})
export class CheckBoxModule {}
