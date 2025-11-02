import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AvatarComponent } from 'ng-devui/avatar';
import { CardModule } from 'ng-devui/card';

@Component({
  selector: 'd-with-media',
  imports: [AvatarComponent, CardModule],
  templateUrl: './with-media.component.html',
  styleUrls: ['./with-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithMediaComponent {
  imgSrc = environment.deployPrefix + 'assets/image1.png';
}
