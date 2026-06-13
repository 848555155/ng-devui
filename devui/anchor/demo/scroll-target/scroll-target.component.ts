import { Component } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-scroll-target',
  imports: [AnchorModule, StickyModule],
  templateUrl: './scroll-target.component.html',
  styleUrl: './scroll-target.component.scss',
})
export class ScrollTargetComponent {}
