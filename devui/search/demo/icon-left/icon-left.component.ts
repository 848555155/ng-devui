import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-icon-left',
  templateUrl: './icon-left.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class IconLeftComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSearch(term) {
    console.log(term);
  }
}
