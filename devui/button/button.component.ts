import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { DCommonModule } from 'ng-devui/common';
import { LoadingModule } from 'ng-devui/loading';
import { AnimationNumberDuration } from 'ng-devui/utils';
export type IButtonType = 'button' | 'submit' | 'reset';
/**
 * 类型中text-dark参数废弃
 */
export type IButtonStyle = 'common' | 'primary' | 'text' | 'text-dark' | 'danger' | 'success' | 'warning';
export type IButtonPosition = 'left' | 'right' | 'default';
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'd-button',
  standalone: true,
  imports: [
    LoadingModule,
    DCommonModule
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class ButtonComponent implements AfterContentChecked {
  id = input<string>();
  type = input<IButtonType>('button');
  bsStyle = input<IButtonStyle>('primary');
  shape = input<'circle'>();
  bsSize = input<IButtonSize>('md');
  /**
   * @deprecated
   * 原左右按钮用按钮组实现
   */
  bsPosition = input<IButtonPosition>('default');
  bordered = input(false, {
    transform: coerceBooleanProperty,
  });
  icon = input<string>();
  disabled = input(false, {
    transform: coerceBooleanProperty,
  });
  showLoading = input(false, {
    transform: coerceBooleanProperty,
  });
  width = input<string>();
  autofocus = input(false, {
    transform: coerceBooleanProperty,
  });

  loadingTemplateRef = input<TemplateRef<any>>();
  btnClick = output<MouseEvent>();

  buttonContent = viewChild<ElementRef<HTMLSpanElement>>('buttonContent');

  @HostListener('click', ['$event'])
  handleDisabled($event: MouseEvent) {
    if (this.disabled()) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
    }
  }

  waveLeft = signal(0);
  waveTop = signal(0);
  showWave = signal(false);
  isMouseDown = signal(false);

  private cd = inject(ChangeDetectorRef);

  // 新增click事件，解决直接在host上使用click，在disabled状态下还能触发事件
  onClick(event: MouseEvent) {
    if (!this.showLoading()) {
      this.btnClick.emit(event);
    }
    this.showClickWave(event);
  }

  showClickWave(event: MouseEvent) {
    this.waveLeft.set(event.offsetX);
    this.waveTop.set(event.offsetY);
    this.showWave.set(true);

    setTimeout(() => {
      this.showWave.set(false);
      this.cd.detectChanges();
    }, AnimationNumberDuration.SLOW);
  }

  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }

  hasContent = computed(
    () => !!this.buttonContent() && this.buttonContent().nativeElement && this.buttonContent().nativeElement.innerHTML.trim()
  );
}
