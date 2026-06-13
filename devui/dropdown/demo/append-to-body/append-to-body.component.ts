import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-dropdown-appendtobody',
  standalone: false,
  templateUrl: './append-to-body.component.html',
  styleUrl: './append-to-body.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoAppendToBodyComponent {
  @ViewChild('origin', { static: true }) originRef: ElementRef;

  onToggle(event) {
    console.log(event);
  }
}
