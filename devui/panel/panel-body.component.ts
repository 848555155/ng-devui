import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-body',
  host: {
    class: 'd-panel-body',
  },
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelBodyComponent {}
