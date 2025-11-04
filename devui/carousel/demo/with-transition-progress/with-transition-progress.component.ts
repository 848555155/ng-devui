import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselComponent, CarouselItemComponent } from 'ng-devui/carousel';

@Component({
  selector: 'd-carousel-with-transition-progress',
  imports: [CarouselComponent, CarouselItemComponent],
  templateUrl: './with-transition-progress.component.html',
  styleUrls: ['../demo-common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithTransitionProgressComponent {
  array = [1, 2, 3, 4];
  height = '200px';
  activeIndex = 0;

  getIndex(index: number) {
    console.log(this.activeIndex);
    console.log(index);
  }
}
