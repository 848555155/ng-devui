import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'd-loading-backdrop',
  template: `@if (backdrop()) {
    <div class="devui-loading-backdrop" [style.z-index]="zIndex()" [class.devui-loading-full]="targetName() === 'BODY'"></div>
    }`,
  styleUrls: ['./loading-backdrop.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBackdropComponent {
  backdrop = input(true, { transform: booleanAttribute });
  target = input<Element>();
  zIndex = input(undefined, { transform: numberAttribute });
  targetName = computed(() => this.target()?.nodeName);
}
