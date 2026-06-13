import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-multi-keep-order',
  standalone: false,
  templateUrl: './multi-keep-order.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiKeepOrderComponent {
  options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
    'Option 11',
    'Option 12',
    'Option 13',
    'Option 14',
  ];
  select = ['Option 3', 'Option 8'];
}
