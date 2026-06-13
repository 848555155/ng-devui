import { Component } from '@angular/core';
import { ButtonComponent } from 'ng-devui/button';

@Component({
  selector: 'd-button-loading',
  imports: [ButtonComponent],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  showLoading = false;

  toggleLoading() {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 1000);
  }
}
