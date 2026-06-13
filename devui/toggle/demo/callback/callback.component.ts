import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-callback',
  templateUrl: './callback.component.html',
  styles: [
    `
      d-toggle {
        margin-bottom: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CallbackComponent {
  count = 0;

  onChange(state) {
    console.log(state);
    this.count++;
  }
}
