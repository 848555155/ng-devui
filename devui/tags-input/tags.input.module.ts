import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleMenuModule } from 'ng-devui/toggle-menu';
import { TagsInputComponent } from './tags.input.component';
@NgModule({
  imports: [CommonModule, FormsModule, ToggleMenuModule],
  declarations: [TagsInputComponent],
  exports: [TagsInputComponent]
})
export class TagsInputModule {}
