import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, Inject, input, Input } from '@angular/core';
@Directive({
  selector: '[dIframeEventPropagate]'
})
export class IframeEventPropagateDirective implements AfterViewInit {
  event = input('click');
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
        const loadHandler =  () => {
          iframe.contentDocument.addEventListener(this.event(), this.dispatchClickEvent);
          iframe.removeEventListener('load', loadHandler);
        };
        iframe.addEventListener('load', loadHandler);
      }

      this.element.removeEventListener('DOMSubtreeModified', this.AddIframeContentDocumentClickListener);
    }
  };

  dispatchClickEvent = ($event) => {
    const event = this.document.createEvent('MouseEvents');
    event.initEvent(this.event(), true, true);
    event['originEvent'] = $event;
    this.element.dispatchEvent(event);
  };
}
