import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[dAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  autoFocus = input(false, {
    transform: coerceBooleanProperty,
    alias: 'dAutoFocus'
  });
  private elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    if (this.autoFocus()) {
      setTimeout(() => {
        this.elementRef.nativeElement.focus();
      });
    }
  }
}
