import { Component, signal } from '@angular/core';
import { delay, of } from 'rxjs';
import { ButtonModule } from 'ng-devui/button';
import { LoadingModule, LoadingType } from 'ng-devui/loading';

@Component({
  selector: 'd-subscription',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent {
  readonly loading = signal<LoadingType>(undefined);
  source = of(1, 2, 3, 4, 5);

  startLoading() {
    this.loading.set(
      this.source.pipe(delay(2000)).subscribe((value) => {
        console.log(value);
      })
    );
  }
}
