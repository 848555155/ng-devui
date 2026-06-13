import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-count',
  templateUrl: './count.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CountComponent {}
