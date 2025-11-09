import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { PanelModule } from 'ng-devui/panel';

@Component({
  selector: 'd-condition-change',
  imports: [PanelModule, ButtonModule],
  templateUrl: './condition-change.component.html',
  styleUrls: ['./condition-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionChangeComponent {
  isCollapsed = true;
  panelToggle = signal(true);
  beforeToggle = (isOpened: boolean) => {
    return isOpened ? this.panelToggle() : true;
  };
}
