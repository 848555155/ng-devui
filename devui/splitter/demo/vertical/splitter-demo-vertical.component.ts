import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-splitter-demo-vertical',
  standalone: false,
  templateUrl: './splitter-demo-vertical.component.html',
  styleUrl: '../splitter-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterDemoVerticalComponent {
  collapsed = true;
  disabledBarSize = '2px';
  constructor() {}

  sizeChange(size) {
    console.log(size);
  }
}
