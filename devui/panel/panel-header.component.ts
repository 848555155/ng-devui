import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-header',
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelHeaderComponent {}
