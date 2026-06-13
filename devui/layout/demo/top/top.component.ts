import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-layout-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LayoutTopComponent {
  logoSrc = '/assets/logo.svg';
}
