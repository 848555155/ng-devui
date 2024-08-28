import { Directive, HostBinding, inject, Input } from '@angular/core';
import { AccordionBase } from './accordion.type';
import { ACCORDION } from './accordion-token';

@Directive({
  standalone: true
})
export abstract class AccordionBaseComponent<T extends AccordionBase> {
  @Input() item: T;
  @Input() deepth = 0;
  @Input() parent: T;

  @HostBinding('class.disabled')
  get disabled() {
    return this.item?.[this.accordion.disabledKey()];
  }
  @HostBinding('attr.title')
  public get title() {
    return this.item?.[this.accordion.titleKey()];
  }
  @HostBinding('style.textIndent.px')
  get textIndent() {
    return this.deepth * 20;
  }
  protected accordion = inject(ACCORDION);
}
