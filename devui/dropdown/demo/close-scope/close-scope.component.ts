import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-dropdown-close-scope',
  standalone: false,
  templateUrl: './close-scope.component.html',
  styleUrl: './close-scope.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoClickBlankComponent {
  onToggle(event) {
    console.log(event);
  }
}
