import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-configurator-demo',
  standalone: false,
  templateUrl: './configurator-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ConfiguratorDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
