import { ChangeDetectionStrategy, Component, Renderer2, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'd-animation-icon',
  imports: [ButtonModule],
  templateUrl: './animation-icon.component.html',
  styleUrls: ['./animation-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationIconComponent {
  angle = signal(0);
  startDiffusion = signal(false);

  rotate() {
    this.angle.update((angle) => angle + 90);
  }

  diffusion() {
    this.startDiffusion.set(true);
    setTimeout(() => {
      this.startDiffusion.set(false);
    }, 400);
  }
}
