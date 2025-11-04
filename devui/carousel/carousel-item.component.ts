import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-carousel-item',
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselItemComponent {}
