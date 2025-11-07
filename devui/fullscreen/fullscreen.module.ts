import { NgModule } from '@angular/core';
import { FullscreenComponent, FullscreenLaunchDirective, FullscreenTargetDirective } from './fullscreen.component';

@NgModule({
  imports: [FullscreenComponent, FullscreenLaunchDirective, FullscreenTargetDirective],
  exports: [FullscreenComponent, FullscreenLaunchDirective, FullscreenTargetDirective],
})
export class FullscreenModule {}
