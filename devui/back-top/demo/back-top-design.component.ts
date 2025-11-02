import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-back-top-design',
  templateUrl: './back-top-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackTopDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
