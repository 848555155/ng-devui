import { Component } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-hash',
  imports: [AnchorModule, StickyModule],
  templateUrl: './hash.component.html',
  styleUrl: './hash.component.scss',
  host: {
    '(click)': 'hostClick($event)',
  }
})
export class HashComponent {
  updateUrlWhenAnchorActive = true;
  scrollToAnchorByHashOnlyInit = false;
  show = true;

  hostClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
