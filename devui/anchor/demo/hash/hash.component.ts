import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-hash',
  imports: [AnchorModule, StickyModule],
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashComponent {
  updateUrlWhenAnchorActive = true;
  scrollToAnchorByHashOnlyInit = false;
  show = true;
  @HostListener('click', ['$event'])
  hostClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
