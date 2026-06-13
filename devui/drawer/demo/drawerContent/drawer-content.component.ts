import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DrawerContentComponent {
  @Input() items;
  @Input() fullScreen;
  @Input() close;
  @Input() changeWidth;
  isFullScreen = false;
  constructor() {}
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this.fullScreen();
  }
}
