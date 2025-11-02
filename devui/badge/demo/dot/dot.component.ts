import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-badge-dot',
  imports: [BadgeComponent],
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotComponent {}
