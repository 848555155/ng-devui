import { NgModule } from '@angular/core';
import { LoadingBackdropComponent } from './loading-backdrop.component';
import { LoadingComponent } from './loading.component';
import { LoadingDirective } from './loading.directive';

@NgModule({
  imports: [LoadingDirective, LoadingBackdropComponent, LoadingComponent],
  exports: [LoadingDirective, LoadingBackdropComponent, LoadingComponent],
})
export class LoadingModule {}
