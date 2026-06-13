import { Component } from '@angular/core';
import { AlertComponent } from 'ng-devui/alert';

@Component({
  selector: 'd-alert-without-icon',
  imports: [AlertComponent],
  templateUrl: './withoutIcon.component.html',
  styles: [
    `
      d-alert {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class WithoutIconComponent {}
