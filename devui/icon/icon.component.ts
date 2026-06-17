import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  TemplateRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'd-icon',
  imports: [NgTemplateOutlet],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  readonly icon = input<string | TemplateRef<any>>();
  readonly operable = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly rotate = input<number | 'infinite'>();
  readonly color = input<string>();

  readonly template = computed(() => {
    const icon = this.icon();
    return icon instanceof TemplateRef ? icon : null;
  });
  private elementRef = inject(ElementRef);

  constructor() {
    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click', { capture: true })
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        if (this.disabled()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
  }
}

@Directive({
  selector: `d-icon-link, [dIconLink]`,
  host: {
    class: 'devui-icon-link',
  },
})
export class IconLinkDirective {}

@Directive({
  selector: `d-icon-hover, [dIconHover]`,
  host: {
    class: 'devui-icon-hover',
  },
})
export class IconHoverDirective {}
