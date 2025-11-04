import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-common-design',
  templateUrl: './common-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
