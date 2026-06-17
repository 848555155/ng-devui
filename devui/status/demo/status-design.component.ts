import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-status-design',
  templateUrl: './status-design.component.html',
})
export class StatusDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
