import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayContainerModule } from 'ng-devui/overlay-container';
import { PositioningModule } from 'ng-devui/position';
import { ReadTipComponent } from './read-tip.component';
import { ReadTipDirective } from './read-tip.directive';

@NgModule({
  imports: [CommonModule, PositioningModule, OverlayContainerModule],
  declarations: [ReadTipComponent, ReadTipDirective],
  exports: [ReadTipComponent, ReadTipDirective]
})
export class ReadTipModule {}
