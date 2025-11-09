import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time.pipe';

@NgModule({
  imports: [RelativeTimePipe],
  exports: [RelativeTimePipe],
})
export class RelativeTimeModule {}
