import { Component, Inject, DOCUMENT, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-scroll-element',
  templateUrl: './scroll-element.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ScrollElementComponent {
  scrollElement: Element = this.doc.querySelector('.doc-viewer-container');
  constructor(@Inject(DOCUMENT) private doc: any) {}
}
