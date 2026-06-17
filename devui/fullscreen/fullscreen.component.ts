import {
  Component,
  ElementRef,
  Renderer2,
  DOCUMENT,
  inject,
  input,
  numberAttribute,
  HostListener,
  output,
  contentChild,
  effect,
  Directive,
} from '@angular/core';
import { firstValueFrom, isObservable, Observable } from 'rxjs';
import { DEFAULT_MODE, DEFAULT_ZINDEX } from './fullscreen.config';
import { FullscreenMode } from './fullscreen.type';
@Directive({

  selector: '[fullscreen-target]',
})
export class FullscreenTargetDirective {
  el = inject(ElementRef<HTMLElement>);
}
@Directive({

  selector: '[fullscreen-launch]',
})
export class FullscreenLaunchDirective {
  el = inject(ElementRef);
  lanuchClick = output();
  @HostListener('click')
  onClick() {
    this.lanuchClick.emit();
  }
}

@Component({
  selector: 'd-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss',
  preserveWhitespaces: false
})
export class FullscreenComponent {
  readonly mode = input<FullscreenMode>(DEFAULT_MODE);
  readonly zIndex = input(DEFAULT_ZINDEX, { transform: numberAttribute });
  readonly container = input<HTMLElement>();
  readonly beforeChange = input(() => Promise.resolve(true), {
    transform: (fuc: (isFullscreen: boolean, trigger: string) => boolean | Promise<boolean> | Observable<boolean>) => {
      if (!fuc) {
        return (isFullscreen: boolean, trigger: string) => Promise.resolve(true);
      }
      return async (isFullscreen: boolean, trigger: string) => {
        const result = fuc(isFullscreen, trigger);
        if (Promise.resolve(result) === result) {
          return await result;
        }
        if (isObservable(result)) {
          return await firstValueFrom(result);
        }
        return Promise.resolve(result);
      };
    },
  });
  fullscreenLaunch = output<{ isFullscreen: boolean }>();
  readonly btnLaunch = contentChild(FullscreenLaunchDirective);
  readonly btnTarget = contentChild(FullscreenTargetDirective);
  private currentTarget: HTMLElement;
  private isFullscreen = false;

  document: Document = inject(DOCUMENT);
  private doc = inject(DOCUMENT);
  private elementRef = inject(ElementRef);
  private render = inject(Renderer2);

  constructor() {
    effect(() => {
      const btnLaunch = this.btnLaunch();
      if (!btnLaunch) {
        return;
      }
      btnLaunch.lanuchClick.subscribe(this.handleFullscreen);
    });
  }

  private launchNormalFullscreen(targetElement: HTMLElement) {
    this.render.addClass(targetElement, 'fullscreen');
    if (this.zIndex) {
      this.render.setStyle(targetElement, 'z-index', this.zIndex().toString());
    }
  }

  private exitNormalFullscreen(targetElement: HTMLElement) {
    this.render.removeClass(targetElement, 'fullscreen');
    this.render.setStyle(targetElement, 'z-index', null);
  }

  private beforeChangeCheck(fullscreen: boolean, trigger: string, func: Function) {
    this.beforeChange()(fullscreen, trigger).then((permission) => {
      permission && func();
    });
  }

  @HostListener('document:fullscreenchange')
  onFullScreenChange() {
    if (this.currentTarget) {
      const targetElement: HTMLElement = this.currentTarget;
      if (this.doc.fullscreenElement) {
        this.addFullScreenStyle();
        this.launchNormalFullscreen(targetElement);
      } else {
        this.removeFullScreenStyle();
        this.currentTarget = null;
        this.exitNormalFullscreen(targetElement);
      }
      // F11退出全屏时，需要将全屏状态传出去
      const isFullscreen = !!this.doc.fullscreenElement;
      this.fullscreenLaunch.emit({ isFullscreen });
      this.isFullscreen = isFullscreen;
    }
  }

  public handleFullscreen = () => {
    const targetElement = this.btnTarget().el.nativeElement;
    const fullscreen = this.mode() === 'normal' ? targetElement.classList.contains('fullscreen') : !!this.doc.fullscreenElement;
    this.beforeChangeCheck(fullscreen, 'click', async () => {
      this.isFullscreen =
        this.mode() === 'normal'
          ? this.normalFullscreenCallback(fullscreen, targetElement)
          : await this.immersiveFullScreenCallback(fullscreen, targetElement);
      this.fullscreenLaunch.emit({ isFullscreen: this.isFullscreen });
    });
  };

  normalFullscreenCallback(fullscreen: boolean, targetElement: HTMLElement) {
    if (fullscreen) {
      this.removeFullScreenStyle();
      this.exitNormalFullscreen(targetElement);
      return false;
    } else {
      this.addFullScreenStyle();
      this.launchNormalFullscreen(targetElement);
      return true;
    }
  }

  async immersiveFullScreenCallback(fullscreen: boolean, targetElement: HTMLElement) {
    this.currentTarget = targetElement;
    fullscreen ? await this.doc.exitFullscreen() : await this.doc.documentElement.requestFullscreen();
    return !!this.doc.fullscreenElement;
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // 按ESC键退出全屏
    if (event.key === 'Escape' && this.isFullscreen) {
      this.beforeChangeCheck(this.isFullscreen, 'esc', () => {
        const targetElement = this.elementRef.nativeElement.querySelector('[fullscreen-target]');
        if (this.mode() === 'normal') {
          this.removeFullScreenStyle();
          this.exitNormalFullscreen(targetElement);
        } else if (this.doc.fullscreenElement) {
          this.doc.exitFullscreen();
        }
        this.isFullscreen = false;
        this.fullscreenLaunch.emit({ isFullscreen: false });
      });
    }
  }

  private addFullScreenStyle() {
    if (this.container()) {
      this.render.addClass(this.container(), 'devui-container-fullscreen');
    } else {
      this.render.addClass(this.document.getElementsByTagName('html')[0], 'devui-fullscreen');
    }
  }

  private removeFullScreenStyle() {
    if (this.container()) {
      this.render.removeClass(this.container(), 'devui-container-fullscreen');
    } else {
      this.render.removeClass(this.document.getElementsByTagName('html')[0], 'devui-fullscreen');
    }
  }
}
