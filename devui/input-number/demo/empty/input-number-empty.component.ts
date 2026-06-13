import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-empty',
  standalone: false,
  templateUrl: './input-number-empty.component.html',
  styleUrl: './input-number-empty.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberEmptyComponent {
  min = -100;
  max = 1000;
  step = 1;
  value = null;

  constructor() {}

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

  blurDetection($event: FocusEvent) {
    console.log('input number blurred');
  }
}
