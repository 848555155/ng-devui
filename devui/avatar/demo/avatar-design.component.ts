import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-avatar-design',
  templateUrl: './avatar-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
