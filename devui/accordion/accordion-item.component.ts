import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { AccordionBaseItemComponent } from './accordion-base-item-component.class';
import { AccordionBaseItem } from './accordion.type';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'd-accordion-item',
  imports: [NgTemplateOutlet],
  templateUrl: './accordion-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionItemComponent extends AccordionBaseItemComponent<AccordionBaseItem> {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.accordion.itemClickFn({
        item: this.item(),
        parent: this.parent(),
        event: event
      });
    }
  }
}
