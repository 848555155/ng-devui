import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-flex-wrap',
  standalone: false,
  templateUrl: './flex-wrap.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class FlexWrapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
