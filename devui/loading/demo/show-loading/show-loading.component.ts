import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { LoadingModule } from 'ng-devui/loading';

@Component({
  selector: 'd-show-loading',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowLoadingComponent {
  showLoading = signal(false);
  tableNames: string[][] = [[]];
  view = {
    top: '50px',
    left: '50%',
  };

  controlLoading() {
    this.showLoading.set(true);
    setTimeout(() => {
      this.showLoading.set(false);
    }, 1000);
  }
}
