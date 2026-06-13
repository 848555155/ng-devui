import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-layout-top',
  standalone: false,
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LayoutTopComponent {
  logoSrc = '/assets/logo.svg';
}
