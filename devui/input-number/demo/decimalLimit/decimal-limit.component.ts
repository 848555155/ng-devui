import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-decimal-limit',
  standalone: false,
  templateUrl: './decimal-limit.component.html',
  styleUrl: './decimal-limit.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DecimalLimitComponent {
  value = 2;

  showValue($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }
}
