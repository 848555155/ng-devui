import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-content',
  standalone: false,
  template: '<ng-content></ng-content>',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ContentComponent {
  @HostBinding('class.d-content') default = true;
}
