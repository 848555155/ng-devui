import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-scroll-target',
  imports: [AnchorModule, StickyModule],
  templateUrl: './scroll-target.component.html',
  styleUrls: ['./scroll-target.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTargetComponent {}
