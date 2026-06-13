import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Input,
  numberAttribute,
  OnDestroy,
  OnInit,
  output,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

@Directive({
  selector: '[dObserveVisibility]',
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit, AfterViewInit {
  readonly debounceTime = input(0, { transform: numberAttribute });
  readonly threshold = input(1, { transform: numberAttribute });
  readonly root = input<HTMLElement>();
  readonly rootMargin = input('0px');
  show = output<HTMLElement>();
  hide = output<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  private element = inject(ElementRef);

  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.next({ entry: null, observer: null });
    this.subject$.complete();
  }

  private isVisible(element: HTMLElement) {
    return new Promise((resolve) => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

  private createObserver() {
    const isIntersecting = (entry: IntersectionObserverEntry) => entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (isIntersecting(entry)) {
          this.subject$.next({ entry, observer });
        }
      });
    }, {
      root: this.root(),
      rootMargin: this.rootMargin(),
      threshold: this.threshold(),
    });
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$.pipe(delay(this.debounceTime()), filter(Boolean)).subscribe(async ({ entry, observer }) => {
      const target = entry.target as HTMLElement;
      const isStillVisible = await this.isVisible(target);

      if (isStillVisible) {
        this.show.emit(target);
      } else {
        this.hide.emit(target);
      }
    });
  }
}
