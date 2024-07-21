import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-panel-footer',
  standalone: true,
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelFooterComponent { }
