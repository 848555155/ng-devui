import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { ArrowTrigger, CarouselComponent, CarouselItemComponent } from 'ng-devui/carousel';

@Component({
  selector: 'd-carousel-demo-custom',
  imports: [ButtonModule, CarouselComponent, CarouselItemComponent],
  templateUrl: './carousel-demo-custom.component.html',
  styleUrls: ['../demo-common.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDemoCustomComponent {
  array = [1, 2, 3, 4];
  height = '200px';
  showDots = true;
  arrowTrigger: ArrowTrigger = 'never';
}
