import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-append',
  standalone: false,
  templateUrl: './append.component.html',
  styles: `
      d-button {
        margin-right: 4px;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AppendComponent {
  msgs: Array<object> = [];

  showToast(type: string) {
    this.msgs = [{ severity: type, summary: 'Summary', content: 'This is a test text. This is a test text. This is a test text.' }];
  }
}
