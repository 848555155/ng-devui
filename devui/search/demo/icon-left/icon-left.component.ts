import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-icon-left',
  standalone: false,
  templateUrl: './icon-left.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class IconLeftComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
