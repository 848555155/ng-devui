import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-cols',
  standalone: false,
  templateUrl: './grid-cols.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class GridColsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
