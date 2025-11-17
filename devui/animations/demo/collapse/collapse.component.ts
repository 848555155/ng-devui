import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { expandCollapseForDomDestroy } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'd-collapse',
  imports: [SkeletonComponent],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [expandCollapseForDomDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent {
  open = signal(false);
}
