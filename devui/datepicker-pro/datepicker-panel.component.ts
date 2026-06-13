import { Component, HostListener, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-datepicker-panel',
  standalone: false,
  templateUrl: './datepicker-panel.component.html',
  styleUrl: './datepicker-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  preserveWhitespaces: false
})
export class DatepickerPanelComponent {
  @Input() isRangeType: boolean;
  @Input() showTime: boolean;
  @Input() showCustom: boolean;
  @Input() customTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Input() mode: 'year' | 'month' | 'date' | 'week' = 'date';

  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
