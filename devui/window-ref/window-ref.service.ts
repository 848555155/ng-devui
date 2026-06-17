import { ElementRef, inject, Service } from '@angular/core';
import { DocumentRef } from './document-ref.service';

@Service()
export class WindowRef {
  private documentRef = inject(DocumentRef);

  get window() {
    return this.document.defaultView;
  }

  get document() {
    return this.documentRef.document;
  }

  get pageXOffset() {
    return this.window.pageXOffset;
  }

  get pageYOffset() {
    return this.window.pageYOffset;
  }

  get innerHeight() {
    return this.window.innerHeight;
  }

  get innerWidth() {
    return this.window.innerWidth;
  }

  getComputedStyle(element: Element) {
    return this.window.getComputedStyle(element);
  }

  getBoundingClientRect(elementRef: ElementRef) {
    return elementRef.nativeElement && elementRef.nativeElement.getBoundingClientRect();
  }
}
