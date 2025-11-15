import { computed, Directive, linkedSignal } from '@angular/core';
import { AccordionBaseItemComponent } from './accordion-base-item-component.class';
import { AccordionLinkableItem } from './accordion.type';

@Directive()
export abstract class AccordionBaseLinkComponent extends AccordionBaseItemComponent<AccordionLinkableItem> {
  link = computed(() => this.item() && this.item()[this.accordion.linkKey()]);
  target = computed(() => (this.item() && this.item()[this.accordion.linkTargetKey()]) || this.accordion.linkDefaultTarget);
}
