import { Component } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';

@Component({
  selector: 'd-anchor-basic',
  imports: [AnchorModule, StickyModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {}
