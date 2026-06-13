import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-modal-test',
  standalone: false,
  templateUrl: './modal-test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ModalTestComponent {
  @Input() data: any;

  onMouseover() {
    this.data.statusChange();
  }
}
