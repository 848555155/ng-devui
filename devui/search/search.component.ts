import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  inject,
  Injector,
  input,
  Input,
  NgZone,
  output,
  Renderer2,
  runInInjectionContext,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DCommonModule } from 'ng-devui/common';
import { I18nService } from 'ng-devui/i18n';
import { DevConfigService, WithConfig } from 'ng-devui/utils';
import { debounceTime, filter, fromEvent, map } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'd-search',
  standalone: true,
  imports: [CommonModule, FormsModule, DCommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  exportAs: 'search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent implements ControlValueAccessor, AfterViewInit {
  /**
   * 【可选】下拉选框尺寸
   */
  size = input<'' | 'sm' | 'lg'>();
  /**
   * 【可选】下拉默认显示文字
   */
  placeholder = input<string>();
  maxLength = input(Number.MAX_SAFE_INTEGER);
  isKeyupSearch = input(false, {
    transform: coerceBooleanProperty,
  });
  delay = input(300);
  disabled = input(false, {
    transform: coerceBooleanProperty,
  });
  cssClass = input<string>();
  iconPosition = input('right');
  noBorder = input(false, {
    transform: coerceBooleanProperty,
  });
  autoFocus = input(false, {
    transform: coerceBooleanProperty,
  });
  @Input() @WithConfig() styleType = 'default';
  @Input() @WithConfig() showGlowStyle = true;
  @HostBinding('class.devui-glow-style') get hasGlowStyle() {
    return this.showGlowStyle;
  }
  searchFn = output<string>();
  filterInputElement = viewChild<ElementRef>('filterInput');
  lineElement = viewChild('line');
  clearIconElement = viewChild('clearIcon');
  i18nCommonsearchPlaceholderText = toSignal(
    inject(I18nService)
      .langChange()
      .pipe(
        takeUntilDestroyed(),
        map((i18n) => i18n.common.searchPlaceholder)
      )
  );

  clearIconExit = signal(false);

  width: number;
  private onChange = (_: any) => null;
  private onTouch = () => null;

  private renderer = inject(Renderer2);
  private injector = inject(Injector);
  private ngZone = inject(NgZone);

  constructor(private el: ElementRef, private devConfigService: DevConfigService) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any = ''): void {
    this.renderer.setProperty(this.filterInputElement().nativeElement, 'value', value);
    this.renderClearIcon();
  }

  clearText() {
    this.renderer.setProperty(this.filterInputElement().nativeElement, 'value', '');
    if (this.onChange) {
      this.onChange('');
    }
    this.searchFn.emit('');
    this.filterInputElement().nativeElement.focus();
    this.renderClearIcon();
  }

  inputChange(value, event?) {
    this.renderClearIcon();
    // 此函数不能删除，需要给filterInput.value赋值，从而控制clear的显隐。因为registerFilterChange对clear的显隐控制不起作用。
  }

  inputBlur() {
    this.onTouch();
  }

  clickSearch(term: string) {
    if (!this.disabled()) {
      this.searchFn.emit(term);
    }
  }

  registerFilterChange() {
    runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.filterInputElement().nativeElement, 'input')
          .pipe(
            takeUntilDestroyed(),
            map((e: any) => e.target.value),
            debounceTime(this.delay())
          )
          .subscribe((value) => {
            this.onChange(value);
            if (this.isKeyupSearch()) {
              this.searchFn.emit(value);
            }
          });

        fromEvent(this.filterInputElement().nativeElement, 'keydown')
          .pipe(
            takeUntilDestroyed(),
            filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Enter'),
            debounceTime(this.delay())
          )
          .subscribe((keyEvent) => {
            this.searchFn.emit(this.filterInputElement().nativeElement.value);
          });
      });
    });
  }

  ngAfterViewInit() {
    this.registerFilterChange();
    this.renderClearIcon();
  }

  renderClearIcon() {
    if (this.iconPosition() === 'right') {
      if (this.filterInputElement().nativeElement.value && this.lineElement() && this.clearIconElement()) {
        this.clearIconExit.set(true);
      } else if (this.lineElement() && this.clearIconElement()) {
        this.clearIconExit.set(false);
      }
    } else {
      if (this.filterInputElement().nativeElement.value && this.clearIconElement()) {
        this.clearIconExit.set(true);
      } else if (this.clearIconElement()) {
        this.clearIconExit.set(false);
      }
    }
  }
}
