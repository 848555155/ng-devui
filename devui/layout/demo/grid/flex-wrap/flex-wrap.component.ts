import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-flex-wrap',
  templateUrl: './flex-wrap.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FlexWrapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
