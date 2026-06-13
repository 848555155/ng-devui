import { Component, Input, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-header-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ThemeSwitchComponent implements OnInit {
  @Input() contentTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
