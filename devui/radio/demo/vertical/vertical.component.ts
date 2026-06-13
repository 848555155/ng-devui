import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-vertical',
  standalone: false,
  templateUrl: './vertical.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class VerticalComponent {
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  chosenItem = 'Wednesday';

  valueChange(value: string): void {
    console.log(value);
  }
}
