import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelHeaderComponent { }
