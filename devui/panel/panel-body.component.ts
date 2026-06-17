import { Component } from '@angular/core';

@Component({
  selector: 'd-panel-body',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'd-panel-body',
  },
  preserveWhitespaces: false
})
export class PanelBodyComponent {}
