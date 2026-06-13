import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-style-demo',
  templateUrl: './style-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class StyleDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
