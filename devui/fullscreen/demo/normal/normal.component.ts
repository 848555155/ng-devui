import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { FullscreenModule } from 'ng-devui/fullscreen';
import { TooltipModule } from 'ng-devui/tooltip';

@Component({
  selector: 'd-fullscreen-demo-normal',
  imports: [FullscreenModule, ButtonModule, TooltipModule],
  templateUrl: './normal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenDemoNormalComponent {
  btnIcon = 'icon-frame-expand';
  btnContent = '全屏';

  launchFullscreen({ isFullscreen }) {
    if (isFullscreen) {
      this.btnIcon = 'icon-frame-contract';
      this.btnContent = 'Exit';
    } else {
      this.btnIcon = 'icon-frame-expand';
      this.btnContent = 'FullScreen';
    }
  }
}
