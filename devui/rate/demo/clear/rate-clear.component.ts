import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-rate-clear',
  standalone: false,
  templateUrl: './rate-clear.component.html',
  styleUrl: './rate-clear.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateClearComponent implements OnInit {
  value = 0;
  constructor() {}

  ngOnInit(): void {}
}
