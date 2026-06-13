import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-dropdown-demo-focus',
  standalone: false,
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoFocusComponent {
  showExample = false;
  onToggle(event) {
    console.log(event);
  }
}
