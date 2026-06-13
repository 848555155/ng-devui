import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class StyleComponent {
  msgs: Array<Object> = [];

  showToast() {
    this.msgs = [{ severity: 'success', summary: 'Success', content: 'This is a test text. This is a test text. This is a test text.' }];
  }
}
