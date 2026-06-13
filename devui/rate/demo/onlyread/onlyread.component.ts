import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-onlyread',
  standalone: false,
  templateUrl: './onlyread.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateDemoOnlyReadComponent {
  value = 3.5;
  constructor() {}
}
