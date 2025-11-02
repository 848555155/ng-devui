import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-position',
  imports: [BadgeComponent],
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionComponent {}
