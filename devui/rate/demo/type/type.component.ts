import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-type',
  templateUrl: './type.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TypeComponent {
  value1 = 5;
  value2 = 3;
  value3 = 2;
  constructor() {}
}
