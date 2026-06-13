import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { fadeInOut } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { TextInputModule } from 'ng-devui/text-input';
@Component({
  selector: 'd-fade-in-out',
  imports: [SkeletonComponent, TextInputModule],
  templateUrl: './fade-in-out.component.html',
  styleUrl: './fade-in-out.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class FadeInOutComponent {
  readonly open = signal(false);
}
