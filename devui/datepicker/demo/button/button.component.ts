import { Component } from '@angular/core';

@Component({
  selector: 'd-datepicker-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: `./button.component.css`,
})
export class DatepickerButtonComponent {
  datePicker1: any;
  selectedDate2 = null;

  getValue(value) {
    console.log(value);
  }
}
