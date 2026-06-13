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
  styleUrls: ['./alert.component.scss'],
  preserveWhitespaces: false,
})
export class AlertComponent {
  type = input<AlertType>('info');
  cssClass = input<string>();
  closeable = input(true, { transform: booleanAttribute });
  showIcon = input(true, { transform: booleanAttribute });
  autoplay = input(false, { transform: booleanAttribute });
  autoplaySpeed = input(3000, { transform: numberAttribute });
  transitionSpeed = input(500, { transform: numberAttribute });
  operationTemplate = input<TemplateRef<{ close: () => void }>>();
  dismissTime = input<number>();
  closeEvent = output<AlertComponent>();
  box = viewChild<ElementRef>('carouselContainer');
  carouselItems = contentChildren(AlertCarouselItemComponent);
  hide = signal(false);
  autoplayHeight = signal('');
  currentIndex = signal(1);
  readonly SINGLE_LINE_HEIGHT = '24px';

  carouselNum = computed(() => this.carouselItems().length);
  carouselTop = computed(() => `${-(this.currentIndex() - 1) * 100}%`);

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
