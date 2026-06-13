import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-life',
  standalone: false,
  templateUrl: './life.component.html',
  styles: `
      d-button {
        margin-right: 4px;
      }
      :host ::ng-deep .devui-btn-success {
        background: #3dcca6 !important;
        color: #fff;
      }
      :host ::ng-deep .devui-btn-warning {
        background: #fa9841 !important;
        color: #fff;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LifeComponent {
  msgs: Array<object> = [];

  showToast(type: any) {
    switch (type) {
    case 'error':
      this.msgs = [{ severity: type, content: 'This is a test text. This is a test text. This is a test text.' }];
      break;
    case 'common':
      this.msgs = [{ severity: type, content: 'This is a test text. This is a test text. This is a test text.' }];
      break;
    default:
      this.msgs = [{ severity: type, summary: 'Summary', content: 'This is a test text. This is a test text. This is a test text.' }];
    }
  }
}
