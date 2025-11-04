import { Directive } from '@angular/core';

@Directive({
  selector: '[dShapeIconHoverable]',
  host: {
    class: 'devui-shape-icon',
  },
})
export class ShapeIconHoverableDirective {}
