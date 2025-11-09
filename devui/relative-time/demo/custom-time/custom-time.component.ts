import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataTableModule } from 'ng-devui/data-table';
import { I18nFormat } from 'ng-devui/i18n';
import { RelativeTimePipe } from 'ng-devui/relative-time';

@Component({
  selector: 'd-custom-time',
  imports: [DataTableModule, RelativeTimePipe, AsyncPipe],
  templateUrl: './custom-time.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTimeComponent {
  limit = 3 * 12 * 30 * 24 * 60 * 60; // three years
  dates = [
    new Date('2014/5/20 12:00:00'),
    new Date('2015/6/20 12:00:00'),
    new Date('2015/5/19 12:00:00'),
    new Date('2015/5/20 12:18:00'),
    new Date('2015/5/20 12:00:30'),
    new Date('2011/5/20 12:00:00'),
  ];
  compareTime = '2015/5/20 12:00:00';

  getStringName(time: string | number | Date): string {
    return I18nFormat.formatDateTime(time);
  }
}
