import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-header',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class PanelHeaderComponent {}
