import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-resposive-demo',
  standalone: false,
  templateUrl: './resposive-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ResposiveDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
