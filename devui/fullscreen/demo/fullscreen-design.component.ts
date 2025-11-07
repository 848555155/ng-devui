import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-fullscreen-design',
  templateUrl: './fullscreen-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
