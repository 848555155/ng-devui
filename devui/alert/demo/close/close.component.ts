import { Component } from '@angular/core';
import { AlertComponent } from 'ng-devui/alert';

@Component({
  selector: 'd-alert-close',
  imports: [AlertComponent],
  templateUrl: './close.component.html',
  styleUrl: './close.component.css',
})
export class CloseComponent {
  handleClose($event: AlertComponent) {
    console.log($event);
  }
}
