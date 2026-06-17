import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-loading-design',
  templateUrl: './loading-design.component.html',
})
export class LoadingDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
