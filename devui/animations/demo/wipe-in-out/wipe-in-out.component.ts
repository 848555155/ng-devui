import { Component, signal } from '@angular/core';
import { wipeInOutAnimation } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'd-wipe-in-out',
  imports: [SkeletonComponent, ButtonModule],
  templateUrl: './wipe-in-out.component.html',
  styleUrl: './wipe-in-out.component.scss',
  animations: [wipeInOutAnimation]
})
export class WipeInOutComponent {
  readonly open = signal(false);
}
