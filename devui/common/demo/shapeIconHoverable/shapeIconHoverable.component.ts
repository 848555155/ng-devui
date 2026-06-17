import { Component } from '@angular/core';
import { PopoverModule, ShapeIconHoverableDirective } from 'ng-devui/devui.module';

@Component({
  selector: 'd-shape-icon-hover',
  imports: [ShapeIconHoverableDirective, PopoverModule],
  templateUrl: './shapeIconHoverable.component.html',
})
export class ShapeIconHoverableDemoComponent {}
