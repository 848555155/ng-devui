import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-header-version-switch',
  templateUrl: './version-switch.component.html',
  styleUrls: ['./version-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VersionSwitchComponent implements OnInit {
  @Input() versionOptions = [];

  currentOption;

  constructor() {}

  ngOnInit(): void {
    this.currentOption = this.versionOptions[0];
  }

  jumpTo($event): void {
    window.open($event.link, $event.target);
  }
}
