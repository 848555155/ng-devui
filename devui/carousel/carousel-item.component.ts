import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-carousel-item',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class CarouselItemComponent {}
