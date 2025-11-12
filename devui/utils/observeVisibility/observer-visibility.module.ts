import { NgModule } from '@angular/core';
import { ObserveVisibilityDirective } from './observer-visibility.directive';

@NgModule({
  imports: [ObserveVisibilityDirective],
  exports: [ObserveVisibilityDirective],
})
export class ObserverVisibilityModule {}
