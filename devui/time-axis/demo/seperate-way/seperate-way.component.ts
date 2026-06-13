import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-time-axis-seperate-way',
  standalone: false,
  templateUrl: './seperate-way.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SeperateWayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
