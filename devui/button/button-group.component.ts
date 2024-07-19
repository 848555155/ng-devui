import { ChangeDetectionStrategy, Component, input, Input} from '@angular/core';

export type IButtonGroupSize = 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'd-button-group',
  standalone: true,
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class ButtonGroupComponent {
  size = input<IButtonGroupSize>('md');
}
