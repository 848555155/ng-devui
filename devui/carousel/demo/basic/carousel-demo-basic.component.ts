import { Component } from '@angular/core';
import { CarouselComponent, CarouselItemComponent } from 'ng-devui/carousel';

@Component({
  selector: 'd-carousel-demo-basic',
  imports: [CarouselComponent, CarouselItemComponent],
  templateUrl: './carousel-demo-basic.component.html',
  styleUrl: '../demo-common.scss',
})
export class CarouselDemoBasicComponent {
  array = [1, 2, 3, 4];
  height = '200px';
  activeIndex = 0;

  getIndex(index: number) {
    console.log(this.activeIndex);
    console.log(index);
  }
}
