import {
  ApplicationRef,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  DOCUMENT,
  ChangeDetectionStrategy,
  viewChild,
  inject,
} from '@angular/core';
import { forEach } from 'lodash-es';

@Component({
  selector: 'd-portal',
  template: ` <ng-template #templateRef>
    <ng-content></ng-content>
  </ng-template>`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalComponent {
  viewRef: EmbeddedViewRef<any>;
  portalContainer: HTMLElement;
  templateRef = viewChild.required('templateRef', { read: TemplateRef });
  document = inject(DOCUMENT);
  private appRef: ApplicationRef;

  addContent() {
    this.portalContainer = this.document.createElement('div');
    this.viewRef = this.templateRef().createEmbeddedView(this);
    forEach(this.viewRef.rootNodes, (node) => {
      this.portalContainer.appendChild(node);
    });
    this.appRef.attachView(this.viewRef);
    this.document.body.appendChild(this.portalContainer);
  }

  open() {
    this.close();
    this.addContent();
  }

  close() {
    if (this.viewRef && this.portalContainer) {
      this.document.body.removeChild(this.portalContainer);
      this.viewRef.destroy();
      this.viewRef = null;
      this.portalContainer = null;
    }
  }
}
