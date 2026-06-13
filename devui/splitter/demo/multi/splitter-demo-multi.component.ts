import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-splitter-demo-multi',
  standalone: false,
  templateUrl: './splitter-demo-multi.component.html',
  styleUrl: '../splitter-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterDemoMultiComponent {
  constructor() {}

  sizeChange(size) {
    console.log(size);
  }
}
