import { Component } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-hash',
  imports: [AnchorModule, StickyModule],
  host: {
    '(click)': 'hostClick($event)',
  },
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss'],
})
export class HashComponent {
  updateUrlWhenAnchorActive = true;
  scrollToAnchorByHashOnlyInit = false;
  show = true;

  hostClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
