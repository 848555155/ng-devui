import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-customize',
  templateUrl: './customize.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateDemoCustomizeComponent {
  value = 5;
  constructor() {}
}
