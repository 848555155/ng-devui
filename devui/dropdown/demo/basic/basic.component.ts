import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-dropdown-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  rotateDegrees = 0;

  onToggle(event) {
    console.log(event);
    this.rotateDegrees = event ? 180 : 0;
  }

  showClickEvent(event) {
    console.log(event);
  }
}
