import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-disabled',
  templateUrl: './disabled.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DisabledComponent {
  items = ['Item1', 'Item2', 'Item3'];
  chosenItem = 'Item1';
}
