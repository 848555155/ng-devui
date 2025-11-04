import { ChangeDetectionStrategy, Component } from '@angular/core';
import { imageArray } from './image-mock';
import { CarouselComponent, CarouselItemComponent } from 'ng-devui/carousel';
@Component({
  selector: 'd-carousel-demo-autoplay',
  imports: [CarouselComponent, CarouselItemComponent],
  templateUrl: './carousel-demo-autoplay.component.html',
  styles: [
    `
      d-carousel-item {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDemoAutoPlayComponent {
  // imageUrl 数组
  imageArray = imageArray;
  height = '500px';
  autoplay = true;
  autoplaySpeed = 3000;
  transitionSpeed = 1000;
}
