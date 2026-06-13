import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output,
  Renderer2,
  DOCUMENT,
  ChangeDetectionStrategy,
  inject,
  input,
  booleanAttribute,
  viewChild,
} from '@angular/core';
import { createPopper } from '@popperjs/core';
import { AnimationCurves, AnimationDuration } from '../animations';

interface ExtraSetConfig {
  extraWidth?: number;
  offset?: string;
}

@Component({
  selector: 'd-popper-component',
  templateUrl: './popper.component.html',
  styleUrl: `./popper.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopperComponent implements AfterViewInit, OnDestroy {
  get open() {
    return this._isOpen;
  }

  @Input() set open(value) {
    if (this._isOpen === value) {
      return;
    }
    this.animate = true;
    if (value) {
      this.show();
    } else {
      this.close();
    }
    this._isOpen = value;

    PopperComponent.nextTick(() => {
      this.openChange.emit(value);
      this.setBlurListener();
    });
  }
  readonly fluidPopper = input(true, { transform: booleanAttribute });
  readonly poppoverAppendDirection = input('bottom');
  readonly appendTo = input('body');
  readonly extraConfig = input<ExtraSetConfig>();
  readonly showAnimation = input(true, { transform: booleanAttribute });
  protected popper = null;
  protected _isOpen: any = false;
  protected animate: boolean;
  protected popperDirection: string;
  protected directionAnimationTransformOrigin = {
    top: '0 100%',
    bottom: '0 0',
  };
  private popperNode: Node;
  private popperParent: Node;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private ngZone = inject(NgZone);
  document = inject(DOCUMENT);
  @Output() openChange = new EventEmitter<any>();
  readonly popperActivator = viewChild.required<ElementRef<HTMLDivElement>>('popperActivator');
  readonly popperContainer = viewChild.required<ElementRef<HTMLDivElement>>('popperContainer');

  static nextTick(fn) {
    // Force to run fn after current data changed.
    setTimeout(() => fn.bind(this)());
  }
  onDocumentClick = ($event: MouseEvent) => {
    if (
      !!this.appendTo() &&
      this.popperContainer().nativeElement !== $event.target &&
      !this.popperContainer().nativeElement.contains($event.target as Node)
    ) {
      this.open = false;
    } else if (!this.appendTo() && this.open && !this.el.nativeElement.contains($event.target)) {
      this.open = false;
    }
  };
  private blockEvent = ($event: MouseEvent) => {
    $event.preventDefault();
    $event.stopPropagation();
  };

  constructor() {}

  show() {
    // Append to selector or original parent.
    if (this.appendTo()) {
      if (this.fluidPopper()) {
        let popperWidth = this.popperActivator().nativeElement.offsetWidth;
        if (this.extraConfig()?.extraWidth) {
          popperWidth += this.extraConfig().extraWidth;
        }
        const firstEle = this.popperContainer().nativeElement.firstElementChild;
        if (firstEle.classList.contains('devui-search-container')) {
          for (let i = 0; i < this.popperContainer().nativeElement.children.length; i++) {
            const child = this.popperContainer().nativeElement.children.item(i);
            this.renderer.setStyle(child, 'width', `${popperWidth}px`);
          }
        } else {
          this.renderer.setStyle(firstEle, 'width', `${popperWidth}px`);
        }
      }
      this.attachPopperContainerToSelector(this.appendTo());
    } else {
      this.attachPopperContainerToNode(this.popperParent);
    }
    this.popper = this.createCustomPopper();
    this.renderer.setStyle(this.popperContainer().nativeElement, 'display', 'block');
  }

  private close() {
    const popperContainer = this.popperContainer().nativeElement;
    this.setTransition('close');
    // perspective(1px) solves pixel shift caused by webkit transform
    this.renderer.setStyle(popperContainer, 'transform', popperContainer.style.transform + ` scale3d(1, 0.8, 1) perspective(1px)`);
    // Set container to transparent
    this.renderer.setStyle(popperContainer, 'opacity', 0.8);

    // Can't use bind(this) since it calls itself
    const handler = (e: TransitionEvent) => {
      if (!this.open && this.popper) {
        // Set final state of container to invisible
        this.renderer.setStyle(popperContainer, 'display', 'none');
        this.animate = false;
        // Remove transition
        this.setTransition();
        this.popper.destroy();
        this.popper = null;
        this.detachPopperContainer();
      }
      e.currentTarget.removeEventListener(e.type, handler);
    };
    if (this.showAnimation()) {
      this.popperContainer().nativeElement.addEventListener('transitionend', handler);
    } else {
      this.renderer.setStyle(popperContainer, 'display', 'none');
      this.animate = false;
      this.popper.destroy();
      this.popper = null;
      this.detachPopperContainer();
    }
  }

  setBlurListener() {
    this.ngZone.runOutsideAngular(() => {
      if (this.open) {
        this.document.addEventListener('click', this.onDocumentClick);
        this.popperContainer().nativeElement.addEventListener('click', this.blockEvent);
      } else {
        this.document.removeEventListener('click', this.onDocumentClick);
        this.popperContainer().nativeElement.removeEventListener('click', this.blockEvent);
      }
    });
  }

  private applyTransitionStyle = (data) => {
    const optionsContainer = this.popperContainer().nativeElement;
    this.updateContainerTransitionDirection(data?.state?.modifiersData?.flip?._skip);
    if (this.animate) {
      // perspective(1px) solves pixel shift caused by webkit transform
      this.renderer.setStyle(
        optionsContainer,
        'transform',
        optionsContainer.style.transform +
          ` scale3d(1, 0.8, 1) perspective(1px) ${this.popperDirection === 'bottom' ? 'translateY(-4px)' : 'translateY(4px)'}`
      );
      // Set container init state to transparent as beginning of the transition.
      this.renderer.setStyle(optionsContainer, 'opacity', 0);
      PopperComponent.nextTick(() => {
        this.setTransition('open');
        const handler = (e: TransitionEvent) => {
          // remove transition
          this.setTransition();
          e.currentTarget.removeEventListener(e.type, handler);
        };

        optionsContainer.addEventListener('transitionend', handler);
        this.renderer.setStyle(
          optionsContainer,
          'transform',
          optionsContainer.style.transform.replace('scale3d(1, 0.8, 1)', 'scale3d(1, 1, 1)')
        );
        this.renderer.setStyle(
          optionsContainer,
          'transform',
          optionsContainer.style.transform.replace(
            this.popperDirection === 'bottom' ? 'translateY(-4px)' : 'translateY(4px)',
            'translateY(0)'
          )
        );
        this.renderer.setStyle(optionsContainer, 'opacity', 1);
        this.animate = false;
      });
    } else {
      // handle popper re-rendering, incoming transform doesn't have scale info
      this.renderer.setStyle(
        optionsContainer,
        'transform',
        optionsContainer.style.transform + (this.open ? ' scale3d(1, 1, 1)' : ' scale3d(1, 0.8, 1)') + ' perspective(1px)'
      );
    }
  };

  private updateContainerTransitionDirection(flipped: boolean) {
    const direction = flipped ? 'top' : 'bottom';
    if (this.popperDirection !== direction) {
      this.popperDirection = direction;
      this.setTransitionOrigin();
    }
  }

  private setTransitionOrigin() {
    if (this.popperContainer().nativeElement) {
      this.renderer.setStyle(
        this.popperContainer().nativeElement,
        'transform-origin',
        this.directionAnimationTransformOrigin[this.popperDirection]
      );
    }
  }

  private createCustomPopper() {
    return createPopper(this.popperActivator().nativeElement, this.popperContainer().nativeElement, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            mainAxis: true, // true by default
          },
        },
        {
          name: 'applyReactStyle',
          phase: 'afterWrite',
          enabled: true, // true by default
          fn: this.applyTransitionStyle,
        },
        {
          name: 'offset',
          options: {
            offset: this.extraConfig()?.offset
              ? [parseInt(this.extraConfig().offset.split(',')[0], 10), parseInt(this.extraConfig().offset.split(',')[1], 10)]
              : [0, 5], // true by default
          },
        },
        {
          name: 'flip',
          options: {
            flipVariations: true, // true by default
          },
        },
      ],
      strategy: this.appendTo() ? 'fixed' : 'absolute',
    });
  }

  private setTransition(command = null) {
    const popperContainer = this.popperContainer().nativeElement;
    if (this.animate && command) {
      if (command === 'open') {
        this.renderer.setStyle(
          popperContainer,
          'transition',
          this.showAnimation() ? `all ${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT}` : 'none'
        );
      } else if (command === 'close') {
        popperContainer.style.transition = this.showAnimation() ? `all ${AnimationDuration.BASE} ${AnimationCurves.EASE_IN}` : 'none';
      }
    } else {
      this.renderer.setStyle(popperContainer, 'transition', null);
    }
  }

  public update() {
    PopperComponent.nextTick(() => {
      if (this.popper) {
        this.popper.forceUpdate();
      }
    });
  }

  ngOnDestroy() {
    // Close popper
    this.open = false;
  }

  private detachPopperContainer() {
    // Cache popper's parent and popper node.
    this.popperParent = this.popperContainer().nativeElement.parentNode;
    this.popperNode = this.popperContainer().nativeElement;
    if (this.popperParent && this.popperNode) {
      this.popperParent.removeChild(this.popperNode);
    }
  }

  private attachPopperContainerToNode(nodeParent: Node) {
    if (nodeParent && this.popperNode) {
      this.popperParent = nodeParent;
      this.popperParent.appendChild(this.popperNode);
    }
  }

  private attachPopperContainerToSelector(targetSelector: string) {
    const nodeParent = this.document.querySelector(targetSelector);
    this.attachPopperContainerToNode(nodeParent);
  }

  ngAfterViewInit(): void {
    // Detach popper container once view initialized.
    this.detachPopperContainer();
  }
}
