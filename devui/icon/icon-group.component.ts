import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'd-icon-group',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrls: ['./icon-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconGroupComponent {
}
