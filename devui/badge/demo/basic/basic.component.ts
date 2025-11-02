import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-badge-basic',
  imports: [BadgeComponent],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {}
