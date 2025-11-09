import {
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  RendererFactory2,
  DOCUMENT,
  inject,
} from '@angular/core';
import { OverlayContainerRef } from 'ng-devui/overlay-container';
import { LoadingBackdropComponent } from './loading-backdrop.component';
import { LoadingComponent } from './loading.component';
import { ILoadingOptions } from './loading.types';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private renderer = inject(RendererFactory2).createRenderer(null, null);
  document = inject(DOCUMENT);
  private overlayContainerRef = inject(OverlayContainerRef);
  private componentFactoryResolver = inject(ComponentFactoryResolver);

  // loading 服务内的函数，外部就可以传入ILoadingOptions类型的参数调用它
  open({
    target = this.document.body,
    backdrop = true,
    message,
    loadingTemplateRef,
    positionType = 'relative',
    view,
    injector,
    zIndex,
    loadingStyle = 'default',
  }: ILoadingOptions = {}) {
    const finalComponentFactoryResolver = this.componentFactoryResolver;

    let positionTypeOld = '';
    positionTypeOld = target.style.position || '';
    let backdropRef: ComponentRef<LoadingBackdropComponent>;
    if (backdrop) {
      backdropRef = this.overlayContainerRef.createComponent(
        finalComponentFactoryResolver.resolveComponentFactory(LoadingBackdropComponent),
        injector
      );
      backdropRef.setInput('backdrop', backdrop);
      backdropRef.setInput('zIndex', zIndex);
      backdropRef.setInput('target', target ? target : this.document.body);
      const viewRef = backdropRef.hostView as EmbeddedViewRef<any>;
      viewRef.rootNodes.forEach((node) => target.appendChild(node));
    }

    const loadingRef = this.overlayContainerRef.createComponent(
      finalComponentFactoryResolver.resolveComponentFactory(LoadingComponent),
      injector
    );

    loadingRef.setInput('message', message);
    loadingRef.setInput('zIndex', zIndex);
    loadingRef.setInput('loadingTemplateRef', loadingTemplateRef);
    loadingRef.setInput('top', view ? view.top : '50%');
    loadingRef.setInput('left', view ? view.left : '50%');
    loadingRef.setInput('target', target ? target : this.document.body);
    loadingRef.setInput('loadingStyle', loadingStyle);

    this.renderer.setStyle(target, 'position', positionType);

    const viewRef1 = loadingRef.hostView as EmbeddedViewRef<any>;
    viewRef1.rootNodes.forEach((node) => target.appendChild(node));

    loadingRef.instance.close = () => {
      if (loadingRef) {
        loadingRef.destroy();
      }
      if (backdropRef) {
        backdropRef.destroy();
        backdropRef = null;
      }
      this.renderer.setStyle(target, 'position', positionTypeOld);
    };

    //  返回一个对象内含2个实例loadingInstance和backdropInstance
    return {
      loadingInstance: loadingRef.instance,
      backdropInstance: backdropRef ? backdropRef.instance : null,
    };
  }
}
