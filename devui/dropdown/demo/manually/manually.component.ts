import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-dropdown-demo-manually',
  standalone: false,
  templateUrl: './manually.component.html',
  styleUrl: './manually.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropDownDemoManuallyComponent {}
