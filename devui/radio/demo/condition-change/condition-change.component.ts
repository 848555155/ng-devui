import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-condition-change',
  standalone: false,
  templateUrl: './condition-change.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ConditionChangeComponent {
  items = ['Item1', 'Item2', 'Item3'];
  chosenItem = 'Item1';

  beforeChange = (item: string): boolean => {
    return item !== 'Item2';
  };

  valueChange(item): void {
    console.log(item);
  }
}
