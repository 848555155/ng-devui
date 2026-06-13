import { Component, input } from '@angular/core';

export type IButtonGroupSize = 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'd-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  preserveWhitespaces: false,
})
export class ButtonGroupComponent {
  size = input<IButtonGroupSize>('md');
}
