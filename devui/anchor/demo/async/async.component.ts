import { Component, signal } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { ButtonModule } from 'ng-devui/button';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-async',
  imports: [AnchorModule, ButtonModule, StickyModule],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss',
})
export class AsyncComponent {
  readonly loadMenu = signal(false);
  readonly loadContent = signal(false);
}
