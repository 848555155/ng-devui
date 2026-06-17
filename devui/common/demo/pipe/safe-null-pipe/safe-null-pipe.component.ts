import { Component } from '@angular/core';
import { SafeNullPipe } from 'ng-devui/common';

@Component({
  selector: 'd-safe-null-pipe',
  imports: [SafeNullPipe],
  templateUrl: './safe-null-pipe.component.html',
})
export class SafeNullPipeComponent {
  name = '';
  gender = void 0;
  age = 18;
  address = null;
}
