import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-text-input-size',
  templateUrl: './text-input-size.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TextInputSizeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
