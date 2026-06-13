import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent implements OnInit {
  pager = {
    total: 306,
    pageIndex: 5,
    pageSize: 10,
  };

  pagerLg = {
    total: 1000,
    pageIndex: 5,
    pageSize: 50,
  };

  constructor() {}

  ngOnInit() {}
}
