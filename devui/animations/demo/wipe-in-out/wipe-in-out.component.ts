import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { wipeInOutAnimation } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'd-wipe-in-out',
  imports: [SkeletonComponent, ButtonModule],
  templateUrl: './wipe-in-out.component.html',
  styleUrls: ['./wipe-in-out.component.scss'],
  animations: [wipeInOutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WipeInOutComponent {
  open = signal(false);
}
