import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AvatarComponent } from 'ng-devui/avatar';
import { CardModule } from 'ng-devui/card';

@Component({
  selector: 'd-custom',
  imports: [AvatarComponent, CardModule],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {
  imgSrc = environment.deployPrefix + 'assets/logo.svg';
}
