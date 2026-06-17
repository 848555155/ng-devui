import { Component } from '@angular/core';
import { DatePipe } from 'ng-devui/common';

@Component({
  selector: 'd-date-pipe',
  imports: [DatePipe],
  templateUrl: './date-pipe.component.html',
})
export class DatePipeDemoComponent {
  date = new Date(2014, 1, 11, 13, 1, 22);
  date1 = new Date(2015, 4, 5);
}
