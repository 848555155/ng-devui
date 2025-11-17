import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-animations-design',
  templateUrl: './animations-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationsDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
