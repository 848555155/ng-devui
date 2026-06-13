import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-modal-test',
  templateUrl: './modal-test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ModalTestComponent {
  @Input() data: any;
  @Input() handler: Function;

  close($event) {
    this.handler($event);
  }
}
