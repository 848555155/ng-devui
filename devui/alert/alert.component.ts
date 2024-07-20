import { ChangeDetectionStrategy, Component, computed, contentChildren, effect, input, output, signal, TemplateRef } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { trigger, state, style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BehaviorSubject, combineLatest, filter, interval, map, NEVER, switchMap } from 'rxjs';
import { AlertCarouselItemComponent } from './alert-carousel-item.component';
import { AlertType } from './alert.types';

@Component({
  selector: 'd-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('devuiAlertCarouselBoxAutoPlayerTop', [
      state(
        'true',
        style({
          '--devui-alert-carousel-item-height': '{{height}}',
          transition: 'top {{transitionSpeed}}ms ease',
          top: '-{{size}}%',
        }),
        {
          params: { size: 0, height: '24px', transitionSpeed: 500 },
        }
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class AlertComponent {
  type = input<AlertType>('info');
  cssClass = input<string>();
  closeable = input(true, {
    transform: coerceBooleanProperty,
  });
  showIcon = input(true, {
    transform: coerceBooleanProperty,
  });
  autoplay = input(false, {
    transform: coerceBooleanProperty,
  });
  autoplaySpeed = input(3000);
  transitionSpeed = input(500);
  operationTemplate = input<TemplateRef<{ close: () => void }>>();
  dismissTime = input<number>();
  closeEvent = output<AlertComponent>();
  carouselItems = contentChildren(AlertCarouselItemComponent);

  hide = signal(false);
  autoplayHeight = signal('24px');
  carouselNum = computed(() => this.carouselItems().length);
  currentIndex = signal(1);
  SINGLE_LINE_HEIGHT = '24px';

  pause$ = new BehaviorSubject<boolean>(false);
  autoPlayer$ = combineLatest([toObservable(this.autoplay), toObservable(this.autoplaySpeed), this.pause$.pipe(map((pause) => !pause))])
    .pipe(
      filter(([autoplay]) => autoplay),
      switchMap(([_, value, pass]) => (pass ? interval(value) : NEVER))
    )
    .subscribe(() => this.next());

  constructor() {
    effect(() => {
      const time = this.dismissTime();
      if (typeof time === 'undefined') {return;}
      setTimeout(() => {
        this.close();
      }, time);
    });
    effect(() => {
      const items = this.carouselItems();
      this.renderCarouselItem(items);
    });
  }

  renderCarouselItem(items: readonly AlertCarouselItemComponent[]) {
    if (this.carouselNum() > 1) {
      if (!this.autoplayHeight()) {
        const itemHeights = items.map((item) => {
          const rect = item?.el.nativeElement.getBoundingClientRect();
          return rect?.height || 0;
        });
        const maxHeight = Math.max(...itemHeights);
        this.autoplayHeight.set(maxHeight ? `${maxHeight}px` : this.SINGLE_LINE_HEIGHT);
      }
    }
  }

  next() {
    if (this.currentIndex() < this.carouselNum()) {
      this.currentIndex.update((pre) => pre + 1);
    } else {
      this.currentIndex.set(1);
    }
  }

  close() {
    this.closeEvent.emit(this);
    this.hide.set(true);
  }
}
