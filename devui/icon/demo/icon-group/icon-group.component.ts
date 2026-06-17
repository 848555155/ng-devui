import { Component, signal } from '@angular/core';
import { DropDownModule } from 'ng-devui/dropdown';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'd-icon-group-demo',
  imports: [IconModule, DropDownModule],
  templateUrl: './icon-group.component.html',
  styleUrl: './icon-group.component.scss',
})
export class IconGroupDemoComponent {
  readonly watched = signal(true);
}
