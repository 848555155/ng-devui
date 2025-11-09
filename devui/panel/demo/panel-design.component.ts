import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-panel-design',
  templateUrl: './panel-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
