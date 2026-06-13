import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-horizontal',
  standalone: false,
  templateUrl: './horizontal.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HorizontalComponent {
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  chosenItem = 'Wednesday';

  valueChange(value: string): void {
    console.log(value);
  }
}
