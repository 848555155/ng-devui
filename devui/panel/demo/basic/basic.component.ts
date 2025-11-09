import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'ng-devui/panel';

@Component({
  selector: 'd-basic',
  imports: [PanelModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent {
  isCollapsed = true;
}
