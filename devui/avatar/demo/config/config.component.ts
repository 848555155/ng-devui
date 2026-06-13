import { Component } from '@angular/core';
import { AvatarComponent } from 'ng-devui/avatar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-config',
  imports: [AvatarComponent],
  styleUrls: ['./config.component.css'],
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  imgSrc = environment.deployPrefix + 'assets/logo.svg';
}
