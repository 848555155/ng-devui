import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-rate-half',
  templateUrl: './rate-half.component.html',
  styleUrls: ['./rate-half.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateHalfComponent implements OnInit {
  value = 2.5;
  constructor() {}

  ngOnInit(): void {}
}
