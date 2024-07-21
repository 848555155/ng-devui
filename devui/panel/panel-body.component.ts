import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'd-panel-body',
  standalone: true,
  template: `<ng-content></ng-content>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelBodyComponent {
  @HostBinding('class.d-panel-body') default = true;
}
