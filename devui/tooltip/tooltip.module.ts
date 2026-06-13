import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayContainerRef } from 'ng-devui/overlay-container';
import { PortalModule } from 'ng-devui/portal';
import {PositioningModule} from 'ng-devui/position';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    PositioningModule
  ],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [
    OverlayContainerRef,
  ],
  exports: [TooltipComponent, TooltipDirective]
})
export class TooltipModule {
}
