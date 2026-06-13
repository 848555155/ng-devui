import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'd-datepicker-range-restricted-range',
  standalone: false,
  templateUrl: `./date-range-picker-restricted-range.component.html`,
  styleUrl: `./date-range-picker-restricted-range.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePickerRestrictedRangeComponent {
  dateRange1 = [null, null];
  minDate = new Date('05/20/2019 00:00');
  maxDate = new Date('07/20/2019 00:00');
  dateRange2 = [null, null];
  dateRange3 = [null, null];

  everyRange(range) {
    return range.every(_ => !!_);
  }

  getValue(value) {
    console.log(value);
  }

}
