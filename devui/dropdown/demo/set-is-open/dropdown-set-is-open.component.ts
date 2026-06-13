import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-dropdown-set-is-open',
  templateUrl: './dropdown-set-is-open.component.html',
  styleUrls: ['./dropdown-set-is-open.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DropdownSetIsOpenComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
