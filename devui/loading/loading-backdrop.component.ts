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
  styleUrl: './loading-backdrop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class LoadingBackdropComponent {
  readonly backdrop = input(true, { transform: booleanAttribute });
  readonly target = input<Element>();
  readonly zIndex = input(undefined, { transform: numberAttribute });
  readonly targetName = computed(() => this.target()?.nodeName);
}
