import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-badge-design',
  templateUrl: './badge-design.component.html',
})
export class BadgeDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
