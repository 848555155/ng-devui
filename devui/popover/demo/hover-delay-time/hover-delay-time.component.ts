import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-hover-delay-time',
  standalone: false,
  templateUrl: './hover-delay-time.component.html',
  styleUrl: './hover-delay-time.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class HoverDelayTimeComponent {
  constructor() {}
}
