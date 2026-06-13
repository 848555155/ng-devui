import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-rate-clear',
  templateUrl: './rate-clear.component.html',
  styleUrls: ['./rate-clear.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RateClearComponent implements OnInit {
  value = 0;
  constructor() {}

  ngOnInit(): void {}
}
