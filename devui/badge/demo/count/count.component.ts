import { Component } from '@angular/core';
import { BadgeComponent } from 'ng-devui/badge';

@Component({
  selector: 'd-badge-count',
  imports: [BadgeComponent],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {}
