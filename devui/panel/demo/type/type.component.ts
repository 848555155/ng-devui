import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PanelModule } from 'ng-devui/panel';

@Component({
  selector: 'd-type',
  imports: [PanelModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeComponent {
  isCollapsed = true;
}
