import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnchorModule } from 'ng-devui/anchor';
import { StickyModule } from 'ng-devui/sticky';
import { DDemoNavComponent } from './d-demo-nav.component';
import { TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    StickyModule,
    AnchorModule,
    TranslatePipe
  ],
  declarations: [
    DDemoNavComponent
  ],
  exports: [
    DDemoNavComponent,
    StickyModule,
    AnchorModule
  ]
})
export class DDemoNavModule {}
