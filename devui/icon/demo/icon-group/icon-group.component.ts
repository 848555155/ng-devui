import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DropDownModule } from 'ng-devui/dropdown';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'd-icon-group-demo',
  imports: [IconModule, DropDownModule],
  templateUrl: './icon-group.component.html',
  styleUrls: ['./icon-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconGroupDemoComponent {
  watched = signal(true);
}
