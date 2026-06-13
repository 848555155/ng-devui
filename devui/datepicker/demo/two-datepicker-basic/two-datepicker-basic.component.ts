import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit
} from '@angular/core';

@Component({
  selector: 'd-two-datepicker-basic',
  standalone: false,
  templateUrl: `./two-datepicker-basic.component.html`,
  styleUrl: `./two-datepicker-basic.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoDatepickerBasicComponent implements OnInit {
  rangeStart;
  rangeEnd;
  rangeStart2;
  rangeEnd2;
  rangeStart3;
  rangeEnd3;

  ngOnInit() {
    this.rangeStart2 = new Date('2020/08/15');
    this.rangeEnd2 = new Date('2020/09/20');
  }

  selectStart(value) {
    console.log('start', value);
  }
  selectEnd(value) {
    console.log('end', value);
  }
  selectRange(value) {
    console.log(value);
  }
}
