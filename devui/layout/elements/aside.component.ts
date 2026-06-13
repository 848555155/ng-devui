import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-aside',
  exportAs: 'dAside',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AsideComponent {
  @HostBinding('class.d-aside') default = true;
}
