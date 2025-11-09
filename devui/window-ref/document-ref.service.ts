import { Injectable, DOCUMENT, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocumentRef {
  private doc = inject(DOCUMENT);

  get document() {
    return this.doc;
  }

  get body() {
    return this.document.body;
  }

  get documentElement() {
    return this.document.documentElement;
  }
}
