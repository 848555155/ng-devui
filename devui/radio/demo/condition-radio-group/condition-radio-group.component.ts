import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-condition-radio-group',
  templateUrl: './condition-radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ConditionRadioGroupComponent {
  items = ['Item1', 'Item2', 'Item3'];
  seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
  currentSelectedItem = 'Item1';
  currentSelectedSeason = 'Summer';

  beforeChange = (value: string): boolean => {
    return value !== 'Item2';
  };

  valueChange(value: string): void {
    console.log(value);
  }
}
