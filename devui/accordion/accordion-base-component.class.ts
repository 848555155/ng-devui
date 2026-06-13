import { computed, Directive, inject, input, numberAttribute } from '@angular/core';
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
  readonly item = input<any | T>();
  readonly deepth = input(0, { transform: numberAttribute });
  readonly parent = input<any | T>();

  readonly disabled = computed(() => this.item() && this.item()[this.accordion.disabledKey()]);
  readonly title = computed(() => this.item() && this.item()[this.accordion.titleKey()]);

  protected accordion = inject(ACCORDION);
}
