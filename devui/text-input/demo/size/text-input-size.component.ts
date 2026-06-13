import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-text-input-size',
  standalone: false,
  templateUrl: './text-input-size.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TextInputSizeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
