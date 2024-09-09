import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  inject,
  input,
  Input,
  output,
  Output,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DevConfigService, WithConfig } from 'ng-devui/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-checkbox',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
})
export class CheckBoxComponent implements ControlValueAccessor, AfterViewInit {
  static ID_SEED = 0;
  name = input<string>();
  label = input<string>();
  cssClass = input<string>();
  color = input();
  disabled = input(false, { transform: coerceBooleanProperty });
  isShowTitle = input(true, { transform: coerceBooleanProperty });
  title = input();
  labelTemplate = input<TemplateRef<any>>();
  @Input() halfchecked = false;
  @Input() @WithConfig() showAnimation = true;
  @Input() @WithConfig() showGlowStyle = true;
  @Input() beforeChange: (value) => boolean | Promise<boolean> | Observable<boolean>;
  change = output<boolean>();
  @HostBinding('class.devui-glow-style') get hasGlowStyle() {
    return this.showGlowStyle;
  }

  public id = CheckBoxComponent.ID_SEED++;
  public checked: boolean;
  private onChange = (_: any) => null;
  private onTouch = () => null;
  private changeDetectorRef = inject(ChangeDetectorRef);
  private devConfigService = inject(DevConfigService);
  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    if (this.showGlowStyle) {
      const glowBox = this.el.nativeElement.querySelector('.devui-checkbox > .devui-checkbox-glow-box');
      const labelDom = this.el.nativeElement.querySelector('.devui-checkbox > label');
      const labelHeight = labelDom && getComputedStyle(labelDom).height;
      if (glowBox && labelHeight && labelHeight !== '16px') {
        glowBox.style.height = labelHeight;
      }
    }
  }

  writeValue(checked: any): void {
    if (checked !== null) {
      this.checked = !!checked;
      this.changeDetectorRef.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggle($event) {
    this.canChange().then((val) => {
      if (this.disabled() || !val) {
        return;
      }
      this.checked = !this.checked;
      this.onChange(this.checked);
      this.change.emit(this.checked);
      this.onTouch();
    });
  }

  canChange() {
    let changeResult = Promise.resolve(true);

    if (this.beforeChange) {
      const result: any = this.beforeChange(this.label());
      if (typeof result !== 'undefined') {
        if (result.then) {
          changeResult = result;
        } else if (result.subscribe) {
          changeResult = (result as Observable<boolean>).toPromise();
        } else {
          changeResult = Promise.resolve(result);
        }
      }
    }

    return changeResult;
  }
}
