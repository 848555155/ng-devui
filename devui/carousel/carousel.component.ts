import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item.component';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, EMPTY, interval, map, switchMap } from 'rxjs';

export type ArrowTrigger = 'hover' | 'never' | 'always';
export type DotTrigger = 'click' | 'hover';
export type DotPosition = 'bottom' | 'top';
@Component({
  selector: 'd-carousel',
  exportAs: 'dCarousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class CarouselComponent {
  // 切换箭头的显示方式
  arrowTrigger = input<ArrowTrigger>('hover');
  // 是否自动播放
  autoplay = input(false, { transform: booleanAttribute });
  // 默认自动播放间隔时间
  autoplaySpeed = input(3000, { transform: numberAttribute });
  // 卡片切换动画速度，单位ms
  transitionSpeed = input(500, { transform: numberAttribute });
  // 卡片高度
  height = input('100%');
  // 是否显示面板指示器
  showDots = input(true, { transform: booleanAttribute });
  // 面板指示器位置
  dotPosition = input<DotPosition>('bottom');
  // 指示器触发滚动方式
  dotTrigger = input<DotTrigger>('click');
  // 当前激活面板索引，默认从0开始
  activeIndex = model(0);
  // 卡片切换时，返回当前卡片索引，索引从0开始
  activeIndexChange = output<number>();
  // @ContentChildren(CarouselItemComponent) items: QueryList<CarouselItemComponent>;
  items = contentChildren(CarouselItemComponent);

  isMouseEnter = signal(false);
  showArrow = computed(() => this.arrowTrigger() === 'always' || (this.arrowTrigger() === 'hover' && this.isMouseEnter()));
  // 卡片容器
  itemContainer = viewChild.required<ElementRef<HTMLDivElement>>('itemContainer');
  // 卡片数量
  itemCount = computed(() => this.items().length);
  leftSize = signal(this.activeIndex());
  hasTransition = signal(false);

  // 自动调度id
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  constructor() {
    combineLatest([toObservable(this.autoplay), toObservable(this.autoplaySpeed)])
      .pipe(
        takeUntilDestroyed(),
        map(([autoplay, autoplaySpeed]) => ({ autoplay, autoplaySpeed })),
        switchMap(({ autoplay, autoplaySpeed }) => {
          if (autoplay && autoplaySpeed) {
            return interval(autoplaySpeed);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(() => {
        this.next();
      });
    afterRenderEffect(() => {
      const items = this.items();
      if (items.length !== this.itemCount()) {
        this.activeIndex.set(0);
        this.leftSize.set(0);
      }
    });
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
  goTo(index: number) {
    if (index === this.activeIndex()) {
      return;
    }
    this.hasTransition.set(true);
    if (index < 0 && this.activeIndex() === 0) {
      // 第一个卡片向前切换
      this.activeIndex.set(this.itemCount() - 1);
      const targetEl = this.el.nativeElement.querySelectorAll('d-carousel-item')[this.activeIndex()];
      this.adjustPosition(targetEl, true);
      this.leftSize.set(-1);
      this.adjustTransition(targetEl);
    } else if (index >= this.itemCount() && this.activeIndex() === this.itemCount() - 1) {
      // 最后一个卡片向后切换
      this.activeIndex.set(0);
      const targetEl = this.el.nativeElement.querySelectorAll('d-carousel-item')[this.activeIndex()];
      this.adjustPosition(targetEl, false);
      this.leftSize.set(this.itemCount());
      this.adjustTransition(targetEl);
    } else {
      const idx = index > this.itemCount() - 1 ? this.itemCount() - 1 : index;
      this.activeIndex.set(index < 0 ? 0 : idx);
      this.leftSize.set(this.activeIndex());
    }
    this.activeIndexChange.emit(this.activeIndex());
  }

  // 指示器触发切换函数
  switchStep(index: number, type: DotTrigger) {
    if (type === this.dotTrigger()) {
      this.goTo(index);
    }
  }

  // 调整首尾翻页后的动画
  private adjustTransition(targetEl: HTMLElement) {
    setTimeout(() => {
      this.hasTransition.set(false);
      this.renderer.removeStyle(targetEl, 'transform');
      this.leftSize.set(this.activeIndex());
    }, this.transitionSpeed());
  }

  // 调整首尾翻动时的位置
  private adjustPosition(targetEl: HTMLElement, firstToLast: boolean) {
    const wrapperRect = this.el.nativeElement.querySelector('.devui-carousel-item-wrapper').getBoundingClientRect();
    this.renderer.setStyle(
      targetEl,
      'transform',
      `translateX(${(firstToLast ? -this.itemCount() : this.itemCount()) * wrapperRect.width}px)`
    );
  }
}
