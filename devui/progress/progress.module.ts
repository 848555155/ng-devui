import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressTemplateDirective } from './progress-template.directive';
import { ProgressComponent } from './progress.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressComponent, ProgressTemplateDirective],
  providers: [],
  exports: [ProgressComponent, ProgressTemplateDirective]
})
export class ProgressModule {}
