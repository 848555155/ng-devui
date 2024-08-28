import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';
import { ClipboardDirective } from './clipboard.directive';
import { DatePipe } from './date-pipe';
import { SafeNullPipe } from './safe-null.pipe';
import { SimulateATagDirective } from './helper-utils';
import { IframeEventPropagateDirective } from './iframe-event-propagate.directive';
import { ShapeIconHoverableDirective } from './shapeIconHoverable.directive';

@NgModule({
  imports: [
    SafeNullPipe,
    AutoFocusDirective,
    DatePipe,
    SimulateATagDirective,
    IframeEventPropagateDirective,
    ClipboardDirective,
    ShapeIconHoverableDirective,
  ],
  exports: [
    SafeNullPipe,
    AutoFocusDirective,
    DatePipe,
    SimulateATagDirective,
    IframeEventPropagateDirective,
    ClipboardDirective,
    ShapeIconHoverableDirective,
  ],
})
export class DCommonModule {}
