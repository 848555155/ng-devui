import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-alone-space-gutter',
  standalone: false,
  templateUrl: './alone-space-gutter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AloneSpaceGutterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
