import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-number-disabled',
  standalone: false,
  templateUrl: './input-number-disabled.component.html',
  styleUrl: './input-number-disabled.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InputNumberDisabledComponent {
  min = 1;
  max = 10;
  value = 6;
}
