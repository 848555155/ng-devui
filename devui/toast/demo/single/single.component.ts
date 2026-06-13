import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-single',
  standalone: false,
  templateUrl: './single.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SingleComponent {
  msgs: Array<object> = [];

  showToast() {
    this.msgs = [
      { life: 3000, summary: 'Summary', content: 'This is a test text. This is a test text. This is a test text.' },
      { life: 6000, severity: 'info', summary: 'Summary', content: 'This is a test text. This is a test text. This is a test text.' },
      { severity: 'success', summary: 'Success', content: 'This is a test text. This is a test text. This is a test text.' },
      { severity: 'warn', summary: 'Warn', content: 'This is a test text. This is a test text. This is a test text.' },
    ];
  }
}
