import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-template',
  standalone: false,
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateDemoTemplateComponent {
  value = 4;
  constructor() {}
}
