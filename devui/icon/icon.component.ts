import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
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
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  icon = input<string | TemplateRef<any>>();
  operable = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });
  rotate = input<number | 'infinite'>();
  color = input<string>();

  template = computed(() => {
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
