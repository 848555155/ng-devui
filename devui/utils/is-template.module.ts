import { NgModule } from '@angular/core';
import { IsTemplatePipe } from './is-template.pipe';

@NgModule({
  imports: [IsTemplatePipe],
  exports: [IsTemplatePipe],
})
export class IsTemplateModule {}
