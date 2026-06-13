import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-reg',
  standalone: false,
  templateUrl: './input-number-reg.component.html',
  styleUrl: './input-number-reg.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberRegComponent {
  reg = /^(-|\+)?\d*$/;
  regStr = '^(-|\\+)*\\d*$';
  value = 2;

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

  blurDetection($event: FocusEvent) {
    console.log('input number blurred');
  }
}
