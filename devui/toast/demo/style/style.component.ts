import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-style',
  standalone: false,
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class StyleComponent {
  msgs: Array<object> = [];

  showToast() {
    this.msgs = [{ severity: 'success', summary: 'Success', content: 'This is a test text. This is a test text. This is a test text.' }];
  }
}
