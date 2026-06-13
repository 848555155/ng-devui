import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-anchor-design',
  templateUrl: './anchor-design.component.html',
})
export class AnchorDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
