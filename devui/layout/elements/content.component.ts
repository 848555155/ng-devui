import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ContentComponent {
  @HostBinding('class.d-content') default = true;
}
