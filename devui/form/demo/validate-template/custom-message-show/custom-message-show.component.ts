import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-form-demo-custom-message-show',
  standalone: false,
  templateUrl: './custom-message-show.component.html',
  styleUrl: './custom-message-show.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CustomMessageShowComponent {
  isAlphabetPattern = /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/;
  singleInputData = '';
  singleInputData1 = '';

  inputErrorChange({ errorMessage, showError, errors }) {
    console.log(errorMessage);
  }
}
