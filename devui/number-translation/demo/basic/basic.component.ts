import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataTableModule } from 'ng-devui/data-table';
import { NumberTransPipe } from 'ng-devui/number-translation';

@Component({
  selector: 'd-basic',
  imports: [NumberTransPipe, DataTableModule],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  data = [
    {
      number: 123123123.223,
      type: 'comma',
    },
    {
      number: 232314212,
      type: 'unit',
    },
    {
      number: 231232132,
      type: 'flow',
    },
    {
      number: 231232132,
      type: 'exponent',
    },
  ];
}
