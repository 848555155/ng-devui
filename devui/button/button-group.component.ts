import { Component, input } from '@angular/core';

export type IButtonGroupSize = 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'd-button-group',
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss',
  preserveWhitespaces: false,
})
export class ButtonGroupComponent {
  readonly size = input<IButtonGroupSize>('md');
}
