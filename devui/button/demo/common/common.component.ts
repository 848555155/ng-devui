import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-button-common',
  templateUrl: './common.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CommonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
