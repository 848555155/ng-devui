import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-aside',
  standalone: false,
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.Eager,
  exportAs: 'dAside'
})
export class AsideComponent {
  @HostBinding('class.d-aside') default = true;
}
