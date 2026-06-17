import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LoadingModule } from 'ng-devui/loading';
import { LazyLoadDirective } from 'ng-devui/utils';

@Component({
  selector: 'd-lazy-load',
  imports: [LazyLoadDirective, TranslatePipe, LoadingModule],
  templateUrl: './lazy-load.component.html',
  styleUrl: './lazy-load.component.scss',
})
export class LazyLoadComponent {
  sentence = 'all work and no play make jack a dull boy';
  readonly list = signal(new Array<string>(10).fill(this.sentence));
  total = 40;
  next = 1;
  complete = false;
  readonly showLoading = signal(false);

  next1 = 1;
  readonly showLoading1 = signal(false);
  readonly list1 = signal(new Array(10).fill(this.sentence));
  target = window;

  onLoadMore() {
    if (this.next > this.total) {
      return;
    }
    this.showLoading.set(true);
    const end = this.next + 20;
    const tmpList: string[] = [];
    for (; this.next < end; this.next++) {
      tmpList.push(this.sentence);
    }
    setTimeout(() => {
      this.list.update(l => l.concat(tmpList));
      this.showLoading.set(false);
    }, 300);

    this.complete = this.next > this.total;
    console.log(`load more`, this.next, this.complete);
  }
  onLoadMore1() {
    if (this.next1 > this.total) {
      return;
    }
    this.showLoading1.set(true);
    const end = this.next1 + 20;
    const tmpList: string[] = [];
    for (; this.next1 < end; this.next1++) {
      tmpList.push(this.sentence);
    }
    setTimeout(() => {
      this.list1.update(l => l.concat(tmpList));
      this.showLoading1.set(false);
    }, 300);

    this.complete = this.next1 > this.total;
    console.log(`load more`, this.next, this.complete);
  }
}
