import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CustomComponent {}
