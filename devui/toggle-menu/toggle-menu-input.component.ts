import { Component, HostBinding, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-toggle-menu-input',
  standalone: false,
  templateUrl: './toggle-menu-input.component.html',
  styleUrl: `./toggle-menu-input.component.scss`,
})
export class ToggleMenuInputComponent {
  @Input() value: any;
  @Input() inputValue: any;
  @Input() inputWidth: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() filterKey: string;
  @Input() isDisabledCustomTemplate = false;
  @Input() customTemplate: TemplateRef<any>;
  @HostBinding('style.width')
  get width() {
    return this.inputWidth || 'inherit';
  }
}
