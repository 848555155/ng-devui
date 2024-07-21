import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PanelBodyComponent} from './panel-body.component';
import {PanelFooterComponent} from './panel-footer.component';
import {PanelHeaderComponent} from './panel-header.component';
import {PanelComponent} from './panel.component';

@NgModule({
  imports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent],
  exports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent
  ]
})
export class PanelModule {
}
