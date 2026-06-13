import { Component, ViewEncapsulation } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { AccordionBaseItemComponent } from './accordion-base-item-component.class';
import { AccordionBaseItem } from './accordion.type';

@Component({
  selector: 'd-accordion-item',
  imports: [NgTemplateOutlet],
  host: {
    '(click)': 'onClick($event)',
  },
  templateUrl: './accordion-item.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionItemComponent extends AccordionBaseItemComponent<AccordionBaseItem> {
  onClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.accordion.itemClickFn({
        item: this.item(),
        parent: this.parent(),
        event: event,
      });
    }
  }
}
