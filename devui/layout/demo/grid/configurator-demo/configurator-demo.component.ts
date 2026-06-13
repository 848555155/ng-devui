import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-configurator-demo',
  templateUrl: './configurator-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ConfiguratorDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
