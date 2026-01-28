import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-toggle-menu-placeholder',
  template: `
    @if (isTemplate) {
    } @else {
      <span class="devui-placeholder">{{ placeholder }}</span>
    }
    `,
  styleUrls: [`./toggle-menu-placeholder.component.scss`],
  standalone: false
})
export class ToggleMenuPlaceholderComponent {
  @Input() placeholder: TemplateRef<any> | string;
  get isTemplate() {
    return this.placeholder && typeof this.placeholder !== 'string';
  }
}
