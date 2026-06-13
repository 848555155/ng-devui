import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-style-demo',
  standalone: false,
  templateUrl: './style-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class StyleDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
