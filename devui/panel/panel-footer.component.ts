import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-footer',
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelFooterComponent {}
