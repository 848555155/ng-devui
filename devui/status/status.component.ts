import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'd-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class StatusComponent {
  readonly type = input<string>();
}
