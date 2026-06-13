import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-grid-basic',
  templateUrl: './grid-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class GridBasicComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
