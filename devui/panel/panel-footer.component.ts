import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-footer',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class PanelFooterComponent {}
