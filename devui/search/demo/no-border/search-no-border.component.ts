import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-search-no-border',
  standalone: false,
  templateUrl: './search-no-border.component.html',
  styleUrl: './search-no-border.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SearchNoBorderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSearch(term) {
    console.log(term);
  }
}
