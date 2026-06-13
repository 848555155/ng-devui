import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-toggle-menu-placeholder',
  standalone: false,
  template: `
    @if (isTemplate) { } @else {
    <span class="devui-placeholder">{{ placeholder }}</span>
    }
  `,
  styleUrl: `./toggle-menu-placeholder.component.scss`,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ToggleMenuPlaceholderComponent {
  @Input() placeholder: TemplateRef<any> | string;
  get isTemplate() {
    return this.placeholder && typeof this.placeholder !== 'string';
  }
}
