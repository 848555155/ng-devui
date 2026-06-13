import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-additional',
  standalone: false,
  templateUrl: './additional.component.html',
  styleUrl: './additional.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AdditionalComponent {
  pager1 = {
    total: 10,
    pageIndex: 2,
    pageSize: 10,
  };
  pager2 = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };
  pager3 = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };
  setTotal(number) {
    this.pager2.total = number;
  }
  setLiteTotal(number) {
    this.pager3.total = number;
  }

  setIndex(number: number) {
    this.pager3.pageIndex = number;
    console.log(this.pager3.pageIndex);
  }
}
