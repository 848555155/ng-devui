import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-gutter',
  standalone: false,
  templateUrl: './grid-gutter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class GridGutterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
