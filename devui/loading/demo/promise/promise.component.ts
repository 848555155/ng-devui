import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { LoadingModule, LoadingType } from 'ng-devui/loading';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'd-promise',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './promise.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromiseComponent {
  loading3 = signal<LoadingType>(undefined);
  showLoading = false;
  tableNames: string[][] = [[]];
  fetchMultiplePromise() {
    this.loading3.set([firstValueFrom(timer(3500)), firstValueFrom(timer(3000))]);
  }
}
