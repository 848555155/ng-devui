import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent } from 'ng-devui/alert';

@Component({
  selector: 'd-alert-close',
  imports: [AlertComponent],
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseComponent {
  handleClose($event: AlertComponent) {
    console.log($event);
  }
}
