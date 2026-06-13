import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-auto-focus',
  standalone: false,
  templateUrl: './auto-focus.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AutoFocusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
