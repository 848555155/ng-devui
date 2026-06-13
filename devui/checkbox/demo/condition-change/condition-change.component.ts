import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'd-demo-condition-change',
  standalone: false,
  templateUrl: './condition-change.component.html',
  styleUrl: './condition-change.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CheckboxConditionChangeComponent {
  public checked = false;
  halfCheck = true;
  allCheck = false;
  number = 1;

  onCheckbox1Change(value) {
    console.log('checkbox1 checked:', value);
  }

  beforeChange(label) {
    return label === '条件判断回调允许选中';
  }
}
