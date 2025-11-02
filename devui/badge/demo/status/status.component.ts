import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-badge-status',
  imports: [BadgeComponent],
  templateUrl: './status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {}
