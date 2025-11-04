import { afterRenderEffect, booleanAttribute, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[dAutoFocus]',
})
export class AutoFocusDirective {
  autoFocus = input(false, { transform: booleanAttribute, alias: 'dAutoFocus' });
  private elementRef = inject(ElementRef);
  constructor() {
    afterRenderEffect(() => {
      if (this.autoFocus()) {
        setTimeout(() => {
          this.elementRef.nativeElement.focus();
        });
      }
    });
  }
}
