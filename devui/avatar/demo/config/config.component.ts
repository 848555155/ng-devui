import { Component } from '@angular/core';
import { AvatarComponent } from 'ng-devui/avatar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-config',
  imports: [AvatarComponent],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {
  imgSrc = environment.deployPrefix + 'assets/logo.svg';
}
