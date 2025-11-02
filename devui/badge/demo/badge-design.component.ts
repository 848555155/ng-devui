import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-badge-design',
  templateUrl: './badge-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
