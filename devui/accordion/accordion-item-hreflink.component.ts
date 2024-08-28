import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { AccordionBaseLinkComponent } from './accordion-base-link-component.class';

@Component({
  selector: 'd-accordion-item-hreflink',
  templateUrl: './accordion-item-hreflink.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionItemHreflinkComponent extends AccordionBaseLinkComponent {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.accordion.linkItemClickFn({
        item: this.item,
        parent: this.parent,
        event: event
      });
    }
  }
}
