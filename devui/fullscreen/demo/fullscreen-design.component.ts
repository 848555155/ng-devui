import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-fullscreen-design',
  templateUrl: './fullscreen-design.component.html',
})
export class FullscreenDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
