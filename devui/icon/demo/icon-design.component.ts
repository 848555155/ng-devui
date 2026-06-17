import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-icon-design',
  templateUrl: './icon-design.component.html',
})
export class IconDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
