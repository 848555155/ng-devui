import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-footer',
  standalone: false,
  template: '<ng-content></ng-content>',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class FooterComponent {
  @HostBinding('class.d-footer') default = true;
}
