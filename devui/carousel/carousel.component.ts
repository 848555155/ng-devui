import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  contentChildren,
  effect,
  ElementRef,
  inject,
  input,
  model,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BehaviorSubject, combineLatest, filter, interval, NEVER, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

export type ArrowTrigger = 'hover' | 'never' | 'always';
export type DotTrigger = 'click' | 'hover';
export type DotPosition = 'bottom' | 'top';
@Component({
  selector: 'd-carousel',
  standalone: true,
  imports: [CommonModule],
  exportAs: 'dCarousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class CarouselComponent implements AfterContentInit {
  // 切换箭头的显示方式
  arrowTrigger = input<ArrowTrigger>('hover');
  // 是否自动播放
  autoplay = input(false, {
    transform: coerceBooleanProperty,
  });
  // 默认自动播放间隔时间
  autoplaySpeed = input(3000);
  // 卡片切换动画速度，单位ms
  transitionSpeed = input(500);
  // 卡片高度
  height = input('100%');
  // 是否显示面板指示器
  showDots = input(true, {
    transform: coerceBooleanProperty,
  });
  // 面板指示器位置
  dotPosition = input<DotPosition>('bottom');
  // 指示器触发滚动方式
  dotTrigger = input<DotTrigger>('click');
  // 当前激活面板索引，默认从0开始
  activeIndex = model(0);
  items = contentChildren<CarouselItemComponent>(CarouselItemComponent);

  showArrow = signal(false);
  // 卡片容器
  private itemContainer = viewChild<ElementRef<HTMLDivElement>>('itemContainer');
  // 卡片数量
  private itemCount: number;
  currentPosition = signal(0);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private cdr = inject(ChangeDetectorRef);

  pause$ = new BehaviorSubject(false);
  autoplay$ = combineLatest([toObservable(this.autoplay), toObservable(this.autoplaySpeed), this.pause$])
    .pipe(
      filter(([autoplay]) => autoplay && !!this.itemContainer()),
      switchMap(([_, autoplaySpeed, pause]) => (!pause ? interval(autoplaySpeed) : NEVER)),
      takeUntilDestroyed()
    )
    .subscribe(() => {
      this.next();
    });

  constructor() {
    // contentChildren 变化时，触发重新设置pane
    effect(() => {
      const items = this.items();
      if (items.length !== this.itemCount) {
        this.activeIndex.set(0);
        this.initCarouselWidth();
      }
    });
  }

  // 切换箭头监听事件，用于处理hover方式
  arrowMouseEvent(type: 'enter' | 'leave') {
    if (this.arrowTrigger() !== 'hover') {
      return;
    }
    if (type === 'enter') {
      this.showArrow.set(true);
    } else {
      this.showArrow.set(false);
    }
  }

  // 向前切换
  prev() {
    this.goTo(this.activeIndex() - 1);
  }

  // 向后切换
  next() {
    this.goTo(this.activeIndex() + 1);
  }

  // 指定跳转位置
  async goTo(index: number) {
    if (index === this.activeIndex()) {
      return;
    }
    this.renderer.setStyle(this.itemContainer().nativeElement, 'transition', `left ${this.transitionSpeed()}ms ease`);
    if (index < 0 && this.activeIndex() === 0) {
      // 第一个卡片向前切换
      this.activeIndex.set(this.itemCount - 1);
      const targetEl = this.el.nativeElement.querySelectorAll('d-carousel-item')[this.activeIndex()];
      this.adjustPosition(targetEl, true);
      this.currentPosition.set(-1);
      await this.adjustTransition(targetEl);
    } else if (index >= this.itemCount && this.activeIndex() === this.itemCount - 1) {
      // 最后一个卡片向后切换
      this.activeIndex.set(0);
      const targetEl = this.el.nativeElement.querySelectorAll('d-carousel-item')[this.activeIndex()];
      this.adjustPosition(targetEl, false);
      this.currentPosition.set(this.itemCount);
      await this.adjustTransition(targetEl);
    } else {
      this.activeIndex.set(index < 0 ? 0 : index > this.itemCount - 1 ? this.itemCount - 1 : index);
    }
    this.currentPosition.set(this.activeIndex());
    this.cdr.detectChanges();
  }

  // 指示器触发切换函数
  switchStep(index: number, type: DotTrigger) {
    if (type === this.dotTrigger()) {
      this.goTo(index);
    }
  }

  // 调整首尾翻页后的动画
  private adjustTransition(targetEl: HTMLElement) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.renderer.removeStyle(this.itemContainer().nativeElement, 'transition');
        this.renderer.removeStyle(targetEl, 'transform');
        resolve();
      }, this.transitionSpeed());
    });
  }

  // 调整首尾翻动时的位置
  private adjustPosition(targetEl: HTMLElement, firstToLast: boolean) {
    const wrapperRect = this.el.nativeElement.querySelector('.devui-carousel-item-wrapper').getBoundingClientRect();
    this.renderer.setStyle(targetEl, 'transform', `translateX(${(firstToLast ? -this.itemCount : this.itemCount) * wrapperRect.width}px)`);
  }

  // 初始化container的宽度
  private initCarouselWidth() {
    this.itemCount = this.items().length;
    this.renderer.setStyle(this.itemContainer().nativeElement, 'width', `${this.itemCount * 100}%`);
  }

  ngAfterContentInit() {
    this.initCarouselWidth();
    this.renderer.setStyle(this.itemContainer().nativeElement, 'transition', `left ${this.transitionSpeed()}ms ease`);
  }
}
