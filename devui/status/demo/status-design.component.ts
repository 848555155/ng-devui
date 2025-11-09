import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-status-design',
  templateUrl: './status-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
