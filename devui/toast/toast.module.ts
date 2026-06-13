import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayContainerModule } from 'ng-devui/overlay-container';
import { IsTemplateModule, SafePipeModule } from 'ng-devui/utils';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
@NgModule({
  imports: [CommonModule, IsTemplateModule, SafePipeModule, OverlayContainerModule],
  declarations: [ToastComponent],
  providers: [ToastService],
  exports: [ToastComponent]
})
export class ToastModule {}
