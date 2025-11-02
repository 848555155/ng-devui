import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-card-design',
  templateUrl: './card-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
