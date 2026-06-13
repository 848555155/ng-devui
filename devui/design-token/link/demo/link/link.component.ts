import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LinkComponent {
  constructor() {}
}
