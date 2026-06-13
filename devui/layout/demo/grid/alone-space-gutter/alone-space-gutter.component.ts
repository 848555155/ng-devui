import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-alone-space-gutter',
  templateUrl: './alone-space-gutter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AloneSpaceGutterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
