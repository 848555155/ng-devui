import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-format-demo',
  standalone: false,
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class FormatComponent {
  selectedTime1 = '12:27:50';
  formatOptions = ['hh:mm:ss', 'mm:HH:SS', 'hh:mm', 'MM:ss'];
  format = 'hh:mm:ss';

  timeChange($event) {
    console.log('change', $event);
  }

  modelChange($event) {
    console.log('model', $event);
  }
}
