import { Component } from '@angular/core';
import { PanelModule } from 'ng-devui/panel';

@Component({
  selector: 'd-basic',
  imports: [PanelModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent {
  isCollapsed = true;
}
