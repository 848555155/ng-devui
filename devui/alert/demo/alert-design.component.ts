import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-alert-design',
  templateUrl: './alert-design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDesignComponent {
  imgSrc = `${environment.deployPrefix}assets/no-data.png`;
}
