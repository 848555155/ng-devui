import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-panel-design',
  templateUrl: './panel-design.component.html',
})
export class PanelDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
