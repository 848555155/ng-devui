import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ModalFormComponent {
  constructor() {}
  onClick($event) {}
}
