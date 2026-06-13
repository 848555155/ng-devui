import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-rate-demo-template',
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateDemoTemplateComponent {
  value = 4;
  constructor() {}
}
