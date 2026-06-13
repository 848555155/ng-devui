import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-gutter',
  templateUrl: './grid-gutter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class GridGutterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
