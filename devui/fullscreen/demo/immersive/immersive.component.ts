import { Component } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { FullscreenModule } from 'ng-devui/fullscreen';

@Component({
  selector: 'd-fullscreen-demo-immersive',
  imports: [FullscreenModule, ButtonModule],
  templateUrl: './immersive.component.html',
})
export class FullscreenDemoImmersiveComponent {
  btnContent = 'FullScreen';

  launchFullscreen({ isFullscreen }) {
    if (isFullscreen) {
      this.btnContent = 'Exit';
    } else {
      this.btnContent = 'FullScreen';
    }
  }
}
