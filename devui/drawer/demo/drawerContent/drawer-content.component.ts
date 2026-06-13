import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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
