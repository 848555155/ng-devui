import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { HelperUtils, SimulateATagDirective } from 'ng-devui/common';

@Component({
  selector: 'd-common-helper-jump',
  imports: [ButtonModule, SimulateATagDirective],
  templateUrl: './helper-jump.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperJumpDemoComponent {
  goto() {
    HelperUtils.jumpOuterUrl('//angular.io');
  }
}
