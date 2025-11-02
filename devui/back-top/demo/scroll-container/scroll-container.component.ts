import { Component, ChangeDetectionStrategy, viewChild, ElementRef } from '@angular/core';
import { BackTopComponent } from 'ng-devui/back-top';

@Component({
  selector: 'd-back-top-scroll-container',
  imports: [BackTopComponent],
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollContainerComponent {
  scrollElement = viewChild<ElementRef<HTMLUListElement>>('scrollContent');
  sentence = 'You know some birds are not meant to be caged, their feathers are just too bright.';
  list = new Array(20).fill(this.sentence);

  backTop(event: boolean) {
    console.log(event);
  }
}
