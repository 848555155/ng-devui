import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-dropdown-demo-hover',
  standalone: false,
  templateUrl: './hover.component.html',
  styleUrl: './hover.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoHoverComponent {
  onToggle(event) {
    console.log(event);
  }
}
