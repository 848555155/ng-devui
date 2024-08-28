import { Directive, HostListener } from '@angular/core';
import { AccordionBaseItemComponent } from './accordion-base-item-component.class';
import { AccordionLinkableItem, AccordionOptions } from './accordion.type';

@Directive({
  standalone: true
})
export abstract class AccordionBaseLinkComponent extends AccordionBaseItemComponent<AccordionLinkableItem> {
  get link() {
    return this.item?.[this.accordion.linkKey];
  }

  get target() {
    return this.item?.[this.accordion.linkTargetKey] || this.accordion.linkDefaultTarget;
  }

  get linkType() {
    return this.item?.[this.accordion.linkTypeKey] || '';
  }
}
