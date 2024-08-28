import { NgModule } from '@angular/core';
import { AnchorBoxHashSupportDirective } from './anchor-box-hash.directive';
import { AnchorBoxDirective } from './anchor-box.directive';
import { AnchorLinkDirective } from './anchor-link.directive';
import { AnchorDirective } from './anchor.directive';

@NgModule({
  imports: [AnchorLinkDirective, AnchorBoxDirective, AnchorDirective, AnchorBoxHashSupportDirective],
  exports: [AnchorLinkDirective, AnchorBoxDirective, AnchorDirective, AnchorBoxHashSupportDirective],
})
export class AnchorModule {}
