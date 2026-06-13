import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-form-demo-inner-validator',
  standalone: false,
  templateUrl: './inner-validator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InnerValidatorComponent {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  singleInput1Data = '';
}
