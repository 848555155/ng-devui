import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-month-year-datepicker-pro',
  templateUrl: './month-year-picker.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MonthYearDatepickerProComponent {
  value1 = new Date();
  minDate = new Date('2021-01-01');
  maxDate = new Date('2031-12-30');
  constructor() {}
}
