import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-datepicker-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: `./button.component.css`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerButtonComponent implements OnInit {
  datePicker1: any;
  selectedDate2 = null;

  ngOnInit() {
  }

  getValue(value) {
    console.log(value);
  }
}
