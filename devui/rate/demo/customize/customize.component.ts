import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-customize',
  standalone: false,
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateDemoCustomizeComponent {
  value = 5;
  constructor() {}
}
