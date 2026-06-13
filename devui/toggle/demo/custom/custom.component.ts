import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-custom',
  standalone: false,
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CustomComponent {}
