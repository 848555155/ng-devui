import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-form-demo-custom-message-show',
  templateUrl: './custom-message-show.component.html',
  styleUrls: ['./custom-message-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CustomMessageShowComponent {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  singleInputData = '';
  singleInputData1 = '';

  inputErrorChange({ errorMessage, showError, errors }) {
    console.log(errorMessage);
  }
}
