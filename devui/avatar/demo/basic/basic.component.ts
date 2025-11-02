import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from 'ng-devui/avatar';

@Component({
  selector: 'd-basic',
  imports: [AvatarComponent],
  styleUrls: ['./basic.component.css'],
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent {}
