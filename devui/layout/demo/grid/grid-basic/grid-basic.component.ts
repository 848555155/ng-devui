import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-basic',
  standalone: false,
  templateUrl: './grid-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class GridBasicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
