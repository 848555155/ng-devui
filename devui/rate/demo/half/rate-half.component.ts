import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-rate-half',
  standalone: false,
  templateUrl: './rate-half.component.html',
  styleUrl: './rate-half.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateHalfComponent implements OnInit {
  value = 2.5;
  constructor() {}

  ngOnInit(): void {}
}
