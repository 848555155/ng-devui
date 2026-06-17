import { Component, input } from '@angular/core';

@Component({
  selector: 'd-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  preserveWhitespaces: false
})
export class StatusComponent {
  readonly type = input<string>();
}
