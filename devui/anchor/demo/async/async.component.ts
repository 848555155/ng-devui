import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { ButtonModule } from 'ng-devui/button';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-async',
  imports: [AnchorModule, ButtonModule, StickyModule],
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncComponent {
  loadMenu = signal(false);
  loadContent = signal(false);
}
