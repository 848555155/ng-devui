import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusComponent } from 'ng-devui/status';

@Component({
  selector: 'd-basic',
  imports: [StatusComponent],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {}
