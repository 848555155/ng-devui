import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-position',
  standalone: false,
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class PositionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
