import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-resposive-demo',
  templateUrl: './resposive-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ResposiveDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
