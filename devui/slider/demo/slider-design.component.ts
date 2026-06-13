import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-slider-design',
  standalone: false,
  templateUrl: './slider-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SliderDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
