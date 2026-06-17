import { Component } from '@angular/core';
import { AvatarComponent } from 'ng-devui/avatar';
import { CardModule } from 'ng-devui/card';

@Component({
  selector: 'd-card-card-interactive',
  imports: [AvatarComponent, CardModule],
  templateUrl: './card-interactive.component.html',
  styleUrl: './card-interactive.component.scss',
})
export class CardInteractiveComponent {}
