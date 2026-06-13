import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-time-axis-seperate-way',
  templateUrl: './seperate-way.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SeperateWayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
