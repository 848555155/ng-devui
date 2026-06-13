import { ChangeDetectorRef, computed, Directive, effect, inject, input, numberAttribute } from '@angular/core';
import { AccordionBase } from './accordion.type';
import { ACCORDION } from './accordion-token';

@Directive({
  host: {
    '[class.disabled]': 'disabled()',
    '[attr.title]': 'title()',
    '[style.textIndent.px]': 'deepth() * 20',
  },
})
export abstract class AccordionBaseComponent<T extends AccordionBase> {
  item = input<any | T>();
  deepth = input(0, { transform: numberAttribute });
  parent = input<any | T>();

  disabled = computed(() => this.item() && this.item()[this.accordion.disabledKey()]);
  title = computed(() => this.item() && this.item()[this.accordion.titleKey()]);

  protected accordion = inject(ACCORDION);
  cdr = inject(ChangeDetectorRef);
  constructor() {
    effect(() => {
      const item = this.item();
      item['$c'] = this;
    });
  }
}
