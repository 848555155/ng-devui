import { Component, EventEmitter, Input, Output, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { ToggleMenuListItem } from './toggle-menu.type';

@Component({
  selector: 'd-toggle-menu-label',
  standalone: false,
  templateUrl: './toggle-menu-label.component.html',
  styleUrl: `./toggle-menu-label.component.scss`,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ToggleMenuLabelComponent {
  @Input() mode: 'normal' | 'scroll-y' | 'multiple-line' | string;
  @Input() multiItems: Array<ToggleMenuListItem> = [];
  @Input() disabled = false;
  @Input() maxWidth: string;
  @Input() maxHeight: string;
  @Input() optionDisabledKey = '';
  @Input() customViewTemplate: TemplateRef<any>;
  @Input() valueParser: (item: any) => any;
  @Output() removeChange = new EventEmitter<any>();

  trackByOptionPointer(index, item) {
    return item.option;
  }

  removeItem(item, event, index) {
    this.removeChange.emit({ ...item, event, index });
  }
}
