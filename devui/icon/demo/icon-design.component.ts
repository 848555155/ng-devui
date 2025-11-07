import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-icon-design',
  templateUrl: './icon-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
