import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-splitter-demo-direction',
  standalone: false,
  templateUrl: './splitter-demo-direction.component.html',
  styleUrl: '../splitter-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterDemoDirectionComponent {
  constructor() {}

  sizeChange(size) {
    console.log(size);
  }
}
