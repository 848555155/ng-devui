import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-slider-custom',
  standalone: false,
  templateUrl: './slider-custom-formatter.component.html',
  styleUrl: './slider-custom-formatter.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SliderCustomFormatterComponent {
  inputValue = 8;
  minValue = 0;
  maxValue = 20;
  inputValue2 = 15;

  demoFormatter(value: number) {
    return `${value} apples`;
  }
}
