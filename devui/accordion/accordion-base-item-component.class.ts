import { computed, Directive } from '@angular/core';
import { AccordionBaseComponent } from './accordion-base-component.class';
import { AccordionBaseItem } from './accordion.type';

@Directive({
  host: {
    class: 'devui-accordion-item-title devui-over-flow-ellipsis',
    '[class.active]': 'active()',
  },
})
export abstract class AccordionBaseItemComponent<T extends AccordionBaseItem> extends AccordionBaseComponent<T> {
  active = computed(() => {
    void this.accordion.stateVersion();
    return this.item() && this.item()[this.accordion.activeKey()];
  });

  itemTemplate = computed(() => this.accordion.itemTemplate());
}
