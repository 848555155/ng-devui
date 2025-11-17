import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { fadeInOut } from 'ng-devui/utils';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { TextInputModule } from 'ng-devui/text-input';
@Component({
  selector: 'd-fade-in-out',
  imports: [SkeletonComponent, TextInputModule],
  templateUrl: './fade-in-out.component.html',
  styleUrls: ['./fade-in-out.component.scss'],
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeInOutComponent {
  open = signal(false);
}
