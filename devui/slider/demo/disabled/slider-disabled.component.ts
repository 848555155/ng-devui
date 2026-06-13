import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-slider-disabled',
  templateUrl: './slider-disabled.component.html',
  styleUrls: ['./slider-disabled.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SliderDisabledComponent {
  inputValue = 2;
  minValue = 0;
  maxValue = 20;
}
