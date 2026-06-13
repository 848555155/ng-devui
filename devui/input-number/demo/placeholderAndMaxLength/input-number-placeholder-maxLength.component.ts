import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-placeholder-maxlength',
  standalone: false,
  templateUrl: './input-number-placeholder-maxLength.component.html',
  styleUrl: './input-number-placeholder-maxLength.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberPlaceholderAndMaxLengthComponent {
  min = -100;
  max = 1000;
  step = 1;
  value = 3;

  constructor() {}

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

  blurDetection($event: FocusEvent) {
    console.log('input number blurred');
  }
}
