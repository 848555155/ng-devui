import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  items = ['Item1', 'Item2', 'Item3'];
  chosenItem = 'Item1';

  valueChange(item: string): void {
    console.log(item);
  }
}
