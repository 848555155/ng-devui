import {
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  numberAttribute,
  output,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, filter, switchMap, takeUntil, timer } from 'rxjs';
import { AlertCarouselItemComponent } from './alert-carousel-item.component';
import { AlertType } from './alert.types';

@Component({
  selector: 'd-alert',
  imports: [NgTemplateOutlet],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  preserveWhitespaces: false,
})
export class AlertComponent {
  readonly type = input<AlertType>('info');
  readonly cssClass = input<string>();
  readonly closeable = input(true, { transform: booleanAttribute });
  readonly showIcon = input(true, { transform: booleanAttribute });
  readonly autoplay = input(false, { transform: booleanAttribute });
  readonly autoplaySpeed = input(3000, { transform: numberAttribute });
  readonly transitionSpeed = input(500, { transform: numberAttribute });
  readonly operationTemplate = input<TemplateRef<{ close: () => void }>>();
  readonly dismissTime = input<number>();
  readonly closeEvent = output<AlertComponent>();
  readonly box = viewChild<ElementRef>('carouselContainer');
  readonly carouselItems = contentChildren(AlertCarouselItemComponent);
  readonly hide = signal(false);
  readonly autoplayHeight = signal('');
  readonly currentIndex = signal(1);
  readonly SINGLE_LINE_HEIGHT = '24px';

  readonly carouselNum = computed(() => this.carouselItems().length);
  readonly carouselTop = computed(() => `${-(this.currentIndex() - 1) * 100}%`);

  private el = inject(ElementRef);
  stopTransition$ = new BehaviorSubject(false);

  timer$ = combineLatest({
    autoplay: toObservable(this.autoplay),
    speed: toObservable(this.autoplaySpeed),
    stopTransition: this.stopTransition$,
    hide: toObservable(this.hide),
  })
    .pipe(
      takeUntilDestroyed(),
      filter(({ autoplay, stopTransition, hide }) => autoplay && !stopTransition && !hide),
      switchMap(({ speed }) => timer(0, speed).pipe(takeUntil(this.stopTransition$.pipe(filter((stop) => stop)))))
    )
    .subscribe(() => {
      this.next();
    });

  dismissSub = toObservable(this.dismissTime)
    .pipe(
      takeUntilDestroyed(),
      filter((t): t is number => !!t),
      switchMap((time) => timer(time)),
    )
    .subscribe(() => this.close());

  constructor() {
    afterRenderEffect(() => {
      this.renderCarouselItem();
    });
  }

  renderCarouselItem() {
    if (this.carouselNum() > 1) {
      if (!this.autoplayHeight()) {
        const itemHeights = this.carouselItems().map((item) => {
          const rect = item?.el.nativeElement.getBoundingClientRect();
          return rect?.height || 0;
        });
        const maxHeight = Math.max(...itemHeights);
        this.autoplayHeight.set(maxHeight ? `${maxHeight}px` : this.SINGLE_LINE_HEIGHT);
      }
      this.el.nativeElement.style.setProperty('--devui-alert-carousel-item-height', this.autoplayHeight());
    }
  }

  next() {
    if (this.currentIndex() < this.carouselNum()) {
      this.currentIndex.update((value) => value + 1);
    } else {
      this.currentIndex.set(1);
    }
  }

  close = () => {
    this.stopTransition$.next(true);
    this.closeEvent.emit(this);
    this.hide.set(true);
  };
}
