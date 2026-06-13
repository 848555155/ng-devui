import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'd-datepicker-range-basic',
  standalone: false,
  templateUrl: `./date-range-picker-basic.component.html`,
  styleUrl: `./date-range-picker-basic.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePickerBasicComponent {
  dateRange = [null, null];
  dateRange2 = [new Date('11/03/2017 00:00'), new Date('01/02/2019 00:00')];
  dateRange3 = [null, null];

  everyRange(range) {
    return range.every(_ => !!_);
  }

  getValue(value) {
    console.log(value);
  }

}
