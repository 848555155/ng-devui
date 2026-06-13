import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-header',
  standalone: false,
  template: '<ng-content></ng-content>',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HeaderComponent {
  @HostBinding('class.d-header') default = true;
}
