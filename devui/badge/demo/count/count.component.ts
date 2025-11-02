import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-badge-count',
  imports: [BadgeComponent],
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountComponent {}
