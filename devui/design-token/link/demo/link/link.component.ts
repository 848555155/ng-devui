import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-link',
  standalone: false,
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LinkComponent {
  constructor() {}
}
