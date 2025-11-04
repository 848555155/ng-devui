import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  output,
  Renderer2,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { AlertCarouselItemComponent } from './alert-carousel-item.component';
import { AlertType } from './alert.types';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, filter, first, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'd-alert',
  imports: [NgTemplateOutlet],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  carouselNum = computed(() => this.carouselItems().length);
  currentIndex = signal(1);
  SINGLE_LINE_HEIGHT = '24px';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
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

  constructor() {
    afterRenderEffect(() => {
      this.renderCarouselItem();
    });
    afterRenderEffect(() => {
      if (this.transitionSpeed() && this.box()) {
        this.renderer.setStyle(this.box().nativeElement, 'transition', `top ${this.transitionSpeed()}ms ease`);
      }
    });
    afterRenderEffect(() => {
      if (!this.box()) {
        return;
      }
      const size = this.currentIndex() - 1;
      this.renderer.setStyle(this.box().nativeElement, 'top', `${-size * 100}%`);
    });
    effect(() => {
      const dismissTime = this.dismissTime() || 0;
      if (dismissTime) {
        timer(0, dismissTime)
          .pipe(first())
          .subscribe(() => {
            this.close();
          });
      }
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
