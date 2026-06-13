import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-splitter-demo-vertical',
  templateUrl: './splitter-demo-vertical.component.html',
  styleUrls: ['../splitter-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SplitterDemoVerticalComponent {
  collapsed = true;
  disabledBarSize = '2px';
  constructor() {}

  sizeChange(size) {
    console.log(size);
  }
}
