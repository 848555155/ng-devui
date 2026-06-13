import { Component } from '@angular/core';
import { BackTopComponent } from 'ng-devui/back-top';

@Component({
  selector: 'd-back-top-basic',
  imports: [BackTopComponent],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  backTop(event: boolean) {
    console.log(event);
  }
}
