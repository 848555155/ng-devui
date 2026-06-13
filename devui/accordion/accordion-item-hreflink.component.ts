import { Component, ViewEncapsulation } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { AccordionBaseLinkComponent } from './accordion-base-link-component.class';

@Component({
  selector: 'd-accordion-item-hreflink',
  imports: [NgTemplateOutlet],
  templateUrl: './accordion-item-hreflink.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(click)': 'onClick($event)',
  },
  preserveWhitespaces: false
})
export class AccordionItemHreflinkComponent extends AccordionBaseLinkComponent {
  onClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.accordion.linkItemClickFn({
        item: this.item(),
        parent: this.parent(),
        event: event,
      });
    }
  }
}
