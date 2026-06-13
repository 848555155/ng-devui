import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-basic',
  standalone: false,
  templateUrl: './input-number-basic.component.html',
  styleUrl: './input-number-basic.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberBasicComponent {
  min = 15;
  max = 1000;
  step = 1;
  value = 2;

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }
}
