import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {}
