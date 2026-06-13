import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-dropdown-set-is-open',
  standalone: false,
  templateUrl: './dropdown-set-is-open.component.html',
  styleUrl: './dropdown-set-is-open.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropdownSetIsOpenComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
