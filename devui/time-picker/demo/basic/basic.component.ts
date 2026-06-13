import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic-demo',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  selectedTime1;
  selectedTime2 = '22:32:58';
  selectedTime3;

  timeChange($event) {
    console.log('change', $event);
  }

  modelChange($event) {
    console.log('model', $event);
  }
}
