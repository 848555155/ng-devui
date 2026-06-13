import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-disabled',
  templateUrl: './input-number-disabled.component.html',
  styleUrls: ['./input-number-disabled.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class InputNumberDisabledComponent {
  min = 1;
  max = 10;
  value = 6;
}
