import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-slider-basic',
  standalone: false,
  templateUrl: './slider-basic.component.html',
  styleUrl: './slider-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SliderBasicComponent {
  inputValue = 12;
  minValue = 0;
  maxValue = 20;
  inputValue2 = 15;
  inputValue3 = 0;
  step = (this.maxValue - this.minValue) / 5;

  showVal($event: any) {
    console.log($event);
  }

  afterChange($event: number) {
    console.log('stop value: ' + $event);
  }
}
