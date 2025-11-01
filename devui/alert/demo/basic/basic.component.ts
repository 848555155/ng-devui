import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent } from 'ng-devui/alert';

@Component({
  selector: 'd-alert-basic',
  imports: [AlertComponent],
  templateUrl: './basic.component.html',
  styles: [
    `
      d-alert {
        margin-bottom: 16px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {}
