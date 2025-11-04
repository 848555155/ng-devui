import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-carousel-design',
  templateUrl: './carousel-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
