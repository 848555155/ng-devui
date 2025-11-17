import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { flyInOut } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'd-fly-in-out',
  imports: [SkeletonComponent, ButtonModule],
  templateUrl: './fly-in-out.component.html',
  styleUrls: ['./fly-in-out.component.scss'],
  animations: [flyInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlyInOutComponent {
  open = signal(false);
}
