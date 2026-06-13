import {
  booleanAttribute,
  ComponentRef,
  Directive,
  effect,
  ElementRef,
  EmbeddedViewRef,
  inject,
  Injector,
  input,
  numberAttribute,
  signal,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Observable, Subscription, forkJoin, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoadingBackdropComponent } from './loading-backdrop.component';
import { LoadingComponent } from './loading.component';
import { ILoadingViewPosition, LoadingStyle, LoadingType } from './loading.types';
import { rxResource } from '@angular/core/rxjs-interop';
@Directive({
  selector: '[dLoading]',
  host: {
    '[style.position]': 'position()',
  },
  exportAs: 'dLoading'
})
export class LoadingDirective {
  readonly backdrop = input(false, { transform: booleanAttribute });
  readonly message = input<string>();
  readonly positionType = input<string>();
  readonly showLoading = input<boolean>();
  readonly view = input<ILoadingViewPosition>();
  readonly zIndex = input(undefined, { transform: numberAttribute });
  readonly loading = input<LoadingType | boolean>();
  readonly loadingStyle = input<LoadingStyle>('default');
  readonly loadingTemplateRef = input<TemplateRef<any>>();
  backdropRef: ComponentRef<LoadingBackdropComponent>;
  loadingRef: ComponentRef<LoadingComponent>;
  readonly position = signal('');

  private elementRef = inject(ElementRef);
  private injector = inject(Injector);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const backdrop = this.backdrop();
      const loading = this.loading();
      const loadingTemplateRef = this.loadingTemplateRef();
      const message = this.message();
      const positionType = this.positionType();
      const showLoading = this.showLoading();
      const view = this.view();
      const zIndex = this.zIndex();
      const changeArr = [backdrop, loading, loadingTemplateRef, message, positionType, showLoading, view, zIndex];
      const isBoolean = typeof loading === 'boolean';
      const flag = isBoolean ? loading : undefined;
      const isLoading = showLoading !== undefined ? showLoading : flag;
      if (isLoading !== undefined) {
        this.showLoadingChangeEvent(isLoading);
      }
      if (!isBoolean && loading) {
        this.loadingChangeEvent(loading);
      }
    });
  }

  loadingChangeEvent(loading: LoadingType): void {
    if (loading instanceof Subscription) {
      this.startLoading();
      loading.add(() => this.endLoading());
      return;
    }
    const loadingArr = [].concat(loading).map((item) => (item instanceof Observable ? item : from(item)));
    if (loadingArr.length > 0) {
      this.startLoading();
      forkJoin(loadingArr)
        .pipe(catchError((error) => throwError(() => error)))
        .subscribe({
          error: () => this.endLoading(),
          complete: () => this.endLoading(),
        });
    }
  }

  showLoadingChangeEvent(showLoading: boolean): void {
    if (showLoading === true) {
      this.startLoading();
    } else {
      this.endLoading();
    }
  }

  private startLoading(): void {
    this.position.set(this.positionType() || 'relative');

    if (this.backdrop() && !this.backdropRef) {
      this.createLoadingBackdrop();
    }

    if (!this.backdrop() && this.backdropRef) {
      this.backdropRef.destroy();
      this.backdropRef = null;
    }

    if (!this.loadingRef) {
      this.loadingRef = this.viewContainerRef.createComponent(LoadingComponent, { index: null, injector: this.injector });
      this.insert(this.loadingRef.hostView);
    }
    this.loadingRef.setInput('message', this.message());
    this.loadingRef.setInput('loadingTemplateRef', this.loadingTemplateRef());
    this.loadingRef.setInput('top', this.view() ? this.view().top : '50%');
    this.loadingRef.setInput('left', this.view() ? this.view().left : '50%');
    this.loadingRef.setInput('customPosition', !!this.view());
    this.loadingRef.setInput('zIndex', this.zIndex() ? this.zIndex() : '');
    this.loadingRef.setInput('loadingStyle', this.loadingStyle());
  }

  private endLoading(): void {
    if (this.loadingRef) {
      this.loadingRef.destroy();
      this.loadingRef = null;
    }

    if (this.backdropRef) {
      this.backdropRef.destroy();
      this.backdropRef = null;
    }

    this.position.set('');
  }

  private createLoadingBackdrop(): void {
    this.backdropRef =
      !this.backdropRef && this.viewContainerRef.createComponent(LoadingBackdropComponent, { index: null, injector: this.injector });

    this.insert(this.backdropRef.hostView);
    this.backdropRef.setInput('backdrop', this.backdrop());
    this.backdropRef.setInput('zIndex', this.zIndex() ? this.zIndex() : '');
  }

  private insert(viewRef: ViewRef): ViewRef {
    (viewRef as EmbeddedViewRef<any>).rootNodes.forEach((node) => this.elementRef.nativeElement.appendChild(node));
    return viewRef;
  }
}
