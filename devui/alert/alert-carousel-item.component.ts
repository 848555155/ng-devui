import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'd-alert-carousel-item',
  standalone: true,
  styleUrls: ['./alert-carousel-item.component.scss'],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class AlertCarouselItemComponent {
  el = inject(ElementRef);
}
