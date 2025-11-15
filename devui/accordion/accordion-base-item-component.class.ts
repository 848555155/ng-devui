import { Directive } from '@angular/core';
import { AccordionBaseComponent } from './accordion-base-component.class';
import { AccordionBaseItem } from './accordion.type';

@Directive({
  host: {
    class: 'devui-accordion-item-title devui-over-flow-ellipsis',
    '[class.active]': 'active()',
  },
})
export abstract class AccordionBaseItemComponent<T extends AccordionBaseItem> extends AccordionBaseComponent<T> {
  active() {
    return this.item() && this.item()[this.accordion.activeKey()];
  }
  itemTemplate() {
    return this.accordion.itemTemplate();
  }
}
