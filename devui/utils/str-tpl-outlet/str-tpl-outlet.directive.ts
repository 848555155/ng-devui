import { Directive, EmbeddedViewRef, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isEqual } from 'lodash-es';

@Directive({
  selector: '[dStrTplOutlet]',
})
export class StrTplOutletDirective<T = Record<string, any>> {
  private embeddedViewRef: EmbeddedViewRef<T> | null = null;
  readonly dStrTplOutlet = input<TemplateRef<T> | string>();
  readonly dStrTplOutletContext = input<T>();
  private viewContainer = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<T>);

  constructor() {
    const dStrTplOutlet = this.dStrTplOutlet();
    const dStrTplOutletContext = this.dStrTplOutletContext();
    if (dStrTplOutlet) {
      this.viewContainer.clear();
      const template = this.dStrTplOutlet instanceof TemplateRef ? this.dStrTplOutlet : this.templateRef;
      this.embeddedViewRef = this.viewContainer.createEmbeddedView(template, this.dStrTplOutletContext);
    }

    if (dStrTplOutletContext && this.embeddedViewRef) {
      const isTemplateRef = this.dStrTplOutlet instanceof TemplateRef;
      const newCtx = isTemplateRef ? this.dStrTplOutletContext : {};
      const oldCtx = this.embeddedViewRef.context;
      if (!isEqual(newCtx, oldCtx)) {
        for (const propName of Object.keys(newCtx)) {
          oldCtx[propName] = newCtx[propName];
        }
      }
    }
  }
}
