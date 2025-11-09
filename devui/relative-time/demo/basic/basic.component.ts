import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataTableModule } from 'ng-devui/data-table';
import { I18nFormat } from 'ng-devui/i18n';
import { RelativeTimePipe } from 'ng-devui/relative-time';

@Component({
  selector: 'd-basic',
  imports: [DataTableModule, RelativeTimePipe, AsyncPipe],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  limit = 3 * 12 * 30 * 24 * 60 * 60; // tree years
  dates = [
    new Date().setFullYear(new Date().getFullYear() - 2),
    new Date().setMonth(new Date().getMonth() + 2),
    new Date().setDate(new Date().getDate() + 4),
    new Date().setMinutes(new Date().getMinutes() + 43),
    new Date().setSeconds(new Date().getSeconds() - 30),
    new Date().setFullYear(new Date().getFullYear() - 4),
  ];

  getStringName(time: string | number | Date): string {
    return I18nFormat.formatDateTime(time);
  }
}
