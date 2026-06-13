import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { LoadingModule, LoadingType } from 'ng-devui/loading';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'd-custom',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {
  readonly loading1 = signal<LoadingType>(undefined);
  readonly loading2 = signal<LoadingType>(undefined);
  showLoading = true;
  tableNames: string[][] = [[]];
  view = {
    top: '50px',
    left: '50%',
  };

  fetchCustomLoading1() {
    this.loading1.set(firstValueFrom(timer(3500)));
  }
  fetchCustomLoading2() {
    this.loading2.set(firstValueFrom(timer(3500)));
  }
}
