import { Component, forwardRef, inject, input, Input, model, OnChanges, output, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DevConfigService, WithConfig } from 'ng-devui/utils';
import { isArray } from 'lodash-es';
import { Observable } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CheckBoxComponent } from './checkbox.component';

@Component({
  selector: 'd-checkbox-group',
  standalone: true,
  imports: [CheckBoxComponent, FormsModule],
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxGroupComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
})
export class CheckBoxGroupComponent implements OnChanges, ControlValueAccessor {
  static ID_SEED = 0;
  name = input<string>();
  itemWidth = input<number>();
  color = input<string>();
  direction = input<'row' | 'column'>('column');
  isShowTitle = input(true, {
    transform: coerceBooleanProperty
  });
  disabled = input(false, {
    transform: coerceBooleanProperty
  });
  options = model([]);
  filterKey = input<string>();
  labelTemplate = input<TemplateRef<any>>();
  @Input() @WithConfig() showAnimation = true;
  @Input() beforeChange: (value) => boolean | Promise<boolean> | Observable<boolean>;
  change = output<boolean>();
  values: any[] = [];
  options_display = [];
  private onChange = (_: any) => null;
  private onTouch = () => null;
  private devConfigService = inject(DevConfigService);
  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.values ??= [];
      this.checkType();
    }
  }

  checkType() {
    this.options.set(this.options() ?? []);
    this.options_display = [];
    const checkedArray = [];
    this.values.forEach((item) => {
      if (this.filterKey && item[this.filterKey()]) {
        checkedArray[item[this.filterKey()]] = true;
      } else {
        checkedArray[item] = true;
      }
    });
    this.options().forEach((item) => {
      const option = { isChecked: false };
      option['value'] = item;
      if (this.filterKey && item[this.filterKey()]) {
        if (checkedArray[item[this.filterKey()]] === true) {
          option['isChecked'] = true;
        }
      } else {
        if (checkedArray[item] === true) {
          option['isChecked'] = true;
        }
      }
      this.options_display.push(option);
    });
  }

  writeValue(inputArray: any): void {
    if (inputArray && isArray(inputArray)) {
      this.values = inputArray;
      this.checkType();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggle($event, i) {
    this.onChange(this.getCheckedArray());
    this.onTouch();
    this.change.emit(this.options_display[i]);
  }

  getCheckedArray() {
    const checkedArray = [];
    this.options_display.forEach((item) => {
      if (item.isChecked) {
        checkedArray.push(item.value);
      }
    });
    return checkedArray;
  }
}
