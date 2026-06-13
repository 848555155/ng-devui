import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-slider-disabled',
  standalone: false,
  templateUrl: './slider-disabled.component.html',
  styleUrl: './slider-disabled.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SliderDisabledComponent {
  inputValue = 2;
  minValue = 0;
  maxValue = 20;
}
