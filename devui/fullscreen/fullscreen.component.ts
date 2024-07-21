import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  Input,
  OnDestroy,
  output,
  Renderer2,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DEFAULT_MODE, DEFAULT_ZINDEX, ESC_KEYCODE } from './fullscreen.config';
import { FullscreenMode } from './fullscreen.type';

@Component({
  selector: 'd-fullscreen',
  standalone: true,
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
  preserveWhitespaces: false,
})
export class FullscreenComponent implements OnDestroy, AfterViewInit {
  mode = input<FullscreenMode>(DEFAULT_MODE);
  zIndex = input(DEFAULT_ZINDEX);
  @Input() container: HTMLElement;
  @Input() beforeChange: (isFullscreen: boolean, trigger: string) => boolean | Promise<boolean> | Observable<boolean>;
  fullscreenLaunch = output<{ isFullscreen: boolean }>();
  document = inject(DOCUMENT);
  private currentTarget: HTMLElement;
  private isFullscreen = false;
  private elementRef = inject(ElementRef);
  private render = inject(Renderer2);

  ngAfterViewInit() {
    const btnLaunch = this.elementRef.nativeElement.querySelector('[fullscreen-launch]');
    if (btnLaunch) {
      btnLaunch.addEventListener('click', this.handleFullscreen);
    }
  }

  ngOnDestroy() {
    const btnLaunch = this.elementRef.nativeElement.querySelector('[fullscreen-launch]');
    if (btnLaunch) {
      btnLaunch.removeEventListener('click', this.handleFullscreen);
    }
  }

  private launchNormalFullscreen(targetElement: HTMLElement) {
    targetElement.classList.add('fullscreen');
    if (this.zIndex()) {
      targetElement.setAttribute('style', `z-index: ${this.zIndex()}`);
    }
  }

  private exitNormalFullscreen(targetElement: HTMLElement) {
    targetElement.classList.remove('fullscreen');
    targetElement.style.zIndex = null;
  }

  private async launchImmersiveFullScreen(docElement: any) {
    let fullscreenLaunch;
    if (docElement.requestFullscreen) {
      fullscreenLaunch = docElement.requestFullscreen();
    } else if (docElement.mozRequestFullScreen) {
      fullscreenLaunch = docElement.mozRequestFullScreen();
    } else if (docElement.webkitRequestFullScreen) {
      fullscreenLaunch = Promise.resolve(docElement.webkitRequestFullScreen());
    } else if (docElement.msRequestFullscreen) {
      fullscreenLaunch = Promise.resolve(docElement.msRequestFullscreen());
    }
    return await fullscreenLaunch.then(() => !!this.document.fullscreenElement);
  }

  private async exitImmersiveFullScreen(doc: any) {
    let fullscreenExit;
    if (doc.exitFullscreen) {
      fullscreenExit = doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      fullscreenExit = doc.mozCancelFullScreen();
    } else if (doc.webkitCancelFullScreen) {
      fullscreenExit = Promise.resolve(doc.webkitCancelFullScreen());
    } else if (doc.msExitFullscreen) {
      fullscreenExit = Promise.resolve(doc.msExitFullscreen());
    }
    return await fullscreenExit.then(() => !!this.document.fullscreenElement);
  }

  private canChange(isFullscreen: boolean, trigger: string) {
    let changeResult = Promise.resolve(true);

    if (this.beforeChange) {
      const result: any = this.beforeChange(isFullscreen, trigger);
      if (typeof result !== 'undefined') {
        if (result.then) {
          changeResult = result;
        } else if (result.subscribe) {
          changeResult = (result as Observable<boolean>).toPromise();
        } else {
          changeResult = Promise.resolve(result);
        }
      }
    }

    return changeResult;
  }

  private beforeChangeCheck(fullscreen: boolean, trigger: string, func: Function) {
    this.canChange(fullscreen, trigger).then((permission: boolean) => permission && func());
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  onFullScreenChange(event) {
    if (this.currentTarget) {
      const targetElement: HTMLElement = this.currentTarget;
      if (this.document.fullscreenElement || (this.document as any).msFullscreenElement || (this.document as any).webkitFullscreenElement) {
        this.addFullScreenStyle();
        this.launchNormalFullscreen(targetElement);
      } else {
        this.removeFullScreenStyle();
        this.currentTarget = null;
        this.exitNormalFullscreen(targetElement);
      }
      // F11退出全屏时，需要将全屏状态传出去
      const isFullscreen = !!(
        this.document.fullscreenElement ||
        (this.document as any).msFullscreenElement ||
        (this.document as any).webkitFullscreenElement
      );
      this.fullscreenLaunch.emit({ isFullscreen });
      this.isFullscreen = isFullscreen;
    }
  }

  public handleFullscreen = () => {
    const targetElement = this.elementRef.nativeElement.querySelector('[fullscreen-target]');
    const fullscreen =
      this.mode() === 'normal'
        ? targetElement.classList.contains('fullscreen')
        : !!(
          this.document.fullscreenElement ||
            (this.document as any).msFullscreenElement ||
            (this.document as any).webkitFullscreenElement
        );
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
    return fullscreen
      ? await this.exitImmersiveFullScreen(this.document)
      : await this.launchImmersiveFullScreen(this.document.documentElement);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // 按ESC键退出全屏
    if (event.keyCode === ESC_KEYCODE && this.isFullscreen) {
      this.beforeChangeCheck(this.isFullscreen, 'esc', () => {
        const targetElement = this.elementRef.nativeElement.querySelector('[fullscreen-target]');
        if (this.mode() === 'normal') {
          this.removeFullScreenStyle();
          this.exitNormalFullscreen(targetElement);
        } else if (this.document.fullscreenElement) {
          this.exitImmersiveFullScreen(this.document);
        }

        this.isFullscreen = false;
        this.fullscreenLaunch.emit({ isFullscreen: false });
      });
    }
  }

  private addFullScreenStyle() {
    if (this.container) {
      this.render.addClass(this.container, 'devui-container-fullscreen');
    } else {
      this.render.addClass(this.document.getElementsByTagName('html')[0], 'devui-fullscreen');
    }
  }

  private removeFullScreenStyle() {
    if (this.container) {
      this.render.removeClass(this.container, 'devui-container-fullscreen');
    } else {
      this.render.removeClass(this.document.getElementsByTagName('html')[0], 'devui-fullscreen');
    }
  }
}
