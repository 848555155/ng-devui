import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'd-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  type = input<string>();
}
