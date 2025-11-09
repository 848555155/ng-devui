import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-relative-time-design',
  templateUrl: './relative-time-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelativeTimeDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
