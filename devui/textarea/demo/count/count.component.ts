import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-count',
  standalone: false,
  templateUrl: './count.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CountComponent {}
