import { Component, ChangeDetectionStrategy, inject, viewChild, ElementRef, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';
import { LoadingBackdropComponent, LoadingComponent, LoadingModule, LoadingService } from 'ng-devui/loading';

@Component({
  selector: 'd-full-screen',
  imports: [ButtonModule, LoadingModule],
  templateUrl: './full-screen.component.html',
  styleUrl: './full-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenComponent {
  resultTarget: {
    loadingInstance: LoadingComponent;
    backdropInstance: LoadingBackdropComponent;
  };
  readonly isShow = signal(false);
  private loadingService = inject(LoadingService);
  readonly dm = viewChild<ElementRef<HTMLDivElement>>('me');

  openFullScreen() {
    /*
    返回一个对象 内含loading实例。2000毫秒之后关闭这个loading实例。
    */
    const results = this.loadingService.open();
    console.log('results', results);
    setTimeout(() => {
      results.loadingInstance.close();
    }, 2000);
  }

  openTargetLoading() {
    const dm = this.dm().nativeElement;
    this.resultTarget = this.loadingService.open({
      target: dm,
      message: 'One moment please...',
      positionType: 'relative',
      zIndex: 1,
    });
    console.log('resultTarget', this.resultTarget);
    this.isShow.set(true);
  }

  closeTargetLoading() {
    this.resultTarget.loadingInstance.close();
    this.isShow.set(false);
  }
}
