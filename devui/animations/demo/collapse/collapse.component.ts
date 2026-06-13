import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { expandCollapseForDomDestroy } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'd-collapse',
  imports: [SkeletonComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandCollapseForDomDestroy]
})
export class CollapseComponent {
  readonly open = signal(false);
}
