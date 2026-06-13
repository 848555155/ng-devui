import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-callback',
  standalone: false,
  templateUrl: './callback.component.html',
  styles: `
      d-toggle {
        margin-bottom: 8px;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CallbackComponent {
  count = 0;

  onChange(state) {
    console.log(state);
    this.count++;
  }
}
