import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from 'ng-devui/avatar';
import { CardModule } from 'ng-devui/card';

@Component({
  selector: 'd-card-card-interactive',
  imports: [AvatarComponent, CardModule],
  templateUrl: './card-interactive.component.html',
  styleUrls: ['./card-interactive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInteractiveComponent {}
