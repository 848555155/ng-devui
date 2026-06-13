import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  ElementRef,
  EmbeddedViewRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewRef,
} from '@angular/core';

import { DocumentRef } from 'ng-devui/window-ref';

@Injectable()
export class OverlayContainerRef {
  constructor(private _appRef: ApplicationRef, private documentRef: DocumentRef, private _injector: Injector) {}

  insert(viewRef: ViewRef): ViewRef {
    this._appRef.attachView(viewRef);
    this.documentRef.body.appendChild((viewRef as EmbeddedViewRef<any>).rootNodes[0]);
    return viewRef;
  }

  remove(viewRef: ViewRef) {
    viewRef.destroy();
  }

  createEmbeddedView<C>(templateRef: TemplateRef<any>, context?: C) {
    const viewRef = templateRef.createEmbeddedView(context || {});
    return this.insert(viewRef);
  }

  createComponent<C>(componentType: Type<C>, injector?: Injector, projectableNodes?: any[][]) {
    const componentRef = createComponent(componentType, {
      environmentInjector: this._appRef.injector,
      elementInjector: injector || this._injector,
      projectableNodes: projectableNodes,
    }) as ComponentRef<C>;
    this.insert(componentRef.hostView);
    return componentRef;
  }
}
