import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'd-basic',
  imports: [IconModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {}
