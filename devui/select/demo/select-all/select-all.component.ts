import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-select-all',
  standalone: false,
  templateUrl: './select-all.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SelectAllComponent {
  options = [
    {
      name: 'Option 1',
      value: 4,
    },
    {
      name: 'Option 2',
      value: 8,
    },
    {
      name: 'Option 3',
      value: 16,
    },
    {
      name: 'Option 4',
      value: 32,
    },
  ];
  selectedItems = [...this.options];
}
