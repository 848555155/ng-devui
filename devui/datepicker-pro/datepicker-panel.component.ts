import { Component, HostListener, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-datepicker-panel',
  templateUrl: './datepicker-panel.component.html',
  styleUrls: ['./datepicker-panel.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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
