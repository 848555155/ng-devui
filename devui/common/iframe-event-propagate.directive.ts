
import { AfterViewInit, Directive, ElementRef, DOCUMENT, inject, input } from '@angular/core';
@Directive({
  selector: '[dIframeEventPropagate]',
})
export class IframeEventPropagateDirective implements AfterViewInit {
  readonly event = input('click');
  element = inject(ElementRef<HTMLSelectElement>).nativeElement;
  document = inject(DOCUMENT);

  ngAfterViewInit() {
    this.element.addEventListener('DOMSubtreeModified', this.AddIframeContentDocumentClickListener);
    if (this.element.querySelector('iframe') !== null) {
      this.AddIframeContentDocumentClickListener();
    }
  }
  AddIframeContentDocumentClickListener = () => {
    const iframe = this.element.querySelector('iframe');
    if (iframe !== null) {
      if (iframe.contentDocument !== null) {
        iframe.contentDocument.addEventListener(this.event(), this.dispatchClickEvent);
      } else {
        const loadHandler = () => {
          iframe.contentDocument.addEventListener(this.event(), this.dispatchClickEvent);
          iframe.removeEventListener('load', loadHandler);
        };
        iframe.addEventListener('load', loadHandler);
      }

      this.element.removeEventListener('DOMSubtreeModified', this.AddIframeContentDocumentClickListener);
    }
  };

  dispatchClickEvent = () => {
    const event = new Event(this.event(), {
      bubbles: true,
      cancelable: true
    });
    this.element.dispatchEvent(event);
  };
}
