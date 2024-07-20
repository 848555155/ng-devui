import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Injector,
  input,
  NgZone,
  OnInit,
  runInInjectionContext,
  TemplateRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'd-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements AfterViewInit {
  icon = input<string | TemplateRef<any>>();
  operable = input(false, {
    transform: coerceBooleanProperty,
  });
  disabled = input(false, {
    transform: coerceBooleanProperty,
  });
  rotate = input<number | 'infinite'>();
  color = input<string>();

  template = computed(() => {
    const icon = this.icon();
    return icon instanceof TemplateRef ? icon : null;
  });
  private ngZone = inject(NgZone);
  private injector = inject(Injector);
  private elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click', { capture: true })
          .pipe(takeUntilDestroyed())
          .subscribe((event) => {
            if (this.disabled()) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          });
      });
    });
  }
}

@Directive({
  selector: `d-icon-link, [dIconLink]`,
  standalone: true,
})
export class IconLinkDirective {
  @HostBinding('class.devui-icon-link') default = true;
}

@Directive({
  selector: `d-icon-hover, [dIconHover]`,
  standalone: true,
})
export class IconHoverDirective {
  @HostBinding('class.devui-icon-hover') default = true;
}
