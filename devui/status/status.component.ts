import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'd-status',
  standalone: true,
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class StatusComponent {
  type = input<string>();
}
