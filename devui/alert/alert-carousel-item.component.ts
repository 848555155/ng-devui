import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'd-alert-carousel-item',
  template: `<ng-content></ng-content>`,
  styleUrl: './alert-carousel-item.component.scss',
  preserveWhitespaces: false
})
export class AlertCarouselItemComponent {
  el = inject(ElementRef);
}
