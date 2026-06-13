import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckBoxGroupComponent } from './checkbox-group.component';
import { CheckBoxComponent } from './checkbox.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CheckBoxComponent, CheckBoxGroupComponent],
  providers: [],
  exports: [CheckBoxComponent, CheckBoxGroupComponent]
})
export class CheckBoxModule {
}
