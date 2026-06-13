import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateDemoBasicComponent {
  value = 2;
  constructor() {}
}
