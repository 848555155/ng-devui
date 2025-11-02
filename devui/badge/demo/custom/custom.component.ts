import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-custom',
  imports: [BadgeComponent],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {}
