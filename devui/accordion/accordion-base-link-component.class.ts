import { computed, Directive } from '@angular/core';
import { AccordionBaseItemComponent } from './accordion-base-item-component.class';
import { AccordionLinkableItem } from './accordion.type';

@Directive()
export abstract class AccordionBaseLinkComponent extends AccordionBaseItemComponent<AccordionLinkableItem> {
  readonly link = computed(() => this.item() && this.item()[this.accordion.linkKey()]);
  readonly target = computed(() => (this.item() && this.item()[this.accordion.linkTargetKey()]) || this.accordion.linkDefaultTarget());
}
