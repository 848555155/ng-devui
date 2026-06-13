import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  standalone: false,
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ModalFormComponent {
  constructor() {}
  onClick($event) {}
}
