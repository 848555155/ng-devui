import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-allow-clear-value',
  standalone: false,
  templateUrl: './allow-clear-value.component.html',
  styleUrl: './allow-clear-value.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AllowClearValueComponent {
  value: string;
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
    'Option 0',
    'Option 11',
    'Option 12',
    'Option 13',
    'Option 14',
  ];
}
