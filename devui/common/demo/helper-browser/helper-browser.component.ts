import { Component } from '@angular/core';
import { HelperUtils } from 'ng-devui';

@Component({
  selector: 'd-common-helper-browser',
  templateUrl: './helper-browser.component.html',
})
export class HelperBrowserComponent {
  browserName = HelperUtils.getBrowserName();
  browserVersion = HelperUtils.getBrowserVersion();
}
