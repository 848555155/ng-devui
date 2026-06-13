import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { DFormControlRuleDirective } from 'ng-devui/form';

@Component({
  selector: 'd-form-demo-validate-update',
  standalone: false,
  templateUrl: './validate-update.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ValidateUpdateComponent {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  singleInput1Data = '';

  @ViewChild('myInputValidate') myInputValidate: DFormControlRuleDirective;

  updateRules() {
    this.myInputValidate.updateRules([{ required: true }, { minlength: 2 }, { maxlength: 6 }]);
  }
}
