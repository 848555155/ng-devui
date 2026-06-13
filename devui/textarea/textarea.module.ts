import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaMaxLengthComponent } from './textarea-max-length.component';
import { TextareaDirective } from './textarea.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TextareaDirective, TextareaMaxLengthComponent],
  exports: [TextareaDirective, TextareaMaxLengthComponent]
})
export class TextareaModule {}
