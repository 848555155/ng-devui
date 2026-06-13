import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-type',
  standalone: false,
  templateUrl: './type.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TypeComponent {
  value1 = 5;
  value2 = 3;
  value3 = 2;
  constructor() {}
}
