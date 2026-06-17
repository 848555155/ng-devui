import { Component } from '@angular/core';
import { ArrowTrigger, CarouselComponent, CarouselItemComponent, DotTrigger } from 'ng-devui/carousel';

@Component({
  selector: 'd-carousel-demo-trigger',
  imports: [CarouselComponent, CarouselItemComponent],
  templateUrl: './carousel-demo-trigger.component.html',
  styleUrl: '../demo-common.scss',
})
export class CarouselDemoTriggerComponent {
  array = [1, 2, 3, 4];
  height = '200px';
  dotTrigger: DotTrigger = 'hover';
  arrowTrigger: ArrowTrigger = 'always';
}
