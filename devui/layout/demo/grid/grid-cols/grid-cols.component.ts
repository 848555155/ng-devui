import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-cols',
  templateUrl: './grid-cols.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class GridColsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
