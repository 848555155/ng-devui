import { AfterViewInit, Component, ElementRef, DOCUMENT, inject } from '@angular/core';
import { IframeEventPropagateDirective } from 'ng-devui/common';

@Component({
  selector: 'd-common-iframe-propagate',
  imports: [IframeEventPropagateDirective],
  templateUrl: './iframe-propagate.component.html',
})
export class IframPropagateDemoComponent implements AfterViewInit {
  private el = inject(ElementRef);
  document = inject(DOCUMENT);

  ngAfterViewInit() {
    const divElement = this.document.createElement('div');
    divElement.innerHTML = `
        <p>Child container: iframe</p>
        <p>Click iframe to trigger parent's click event, which will change the background color</p>
    `;
    this.el.nativeElement.querySelector('iframe.content-box').contentDocument.body.appendChild(divElement);
  }

  hostClick(event: MouseEvent) {
    (event.target as HTMLElement).style.background = '#56c3f6';
  }
}
