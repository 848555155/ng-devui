import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-onlyread',
  templateUrl: './onlyread.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateDemoOnlyReadComponent {
  value = 3.5;
  constructor() {}
}
