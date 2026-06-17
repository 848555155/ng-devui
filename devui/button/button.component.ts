import {
  Component,
  input,
  output,
  signal,
  TemplateRef,
  viewChild,
  ElementRef,
} from '@angular/core';
import { DCommonModule } from 'ng-devui/common';
import { LoadingModule } from 'ng-devui/loading';
import { AnimationNumberDuration } from 'ng-devui/utils';
export type IButtonType = 'button' | 'submit' | 'reset';
export type IButtonStyle = 'common' | 'primary' | 'text' | 'text-dark' | 'danger' | 'success' | 'warning';
export type IButtonPosition = 'left' | 'right' | 'default';
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';

@Component({
  selector: 'd-button',
  imports: [LoadingModule, DCommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '(click)': 'handleDisabled($event)',
  },
  preserveWhitespaces: false,
})
export class ButtonComponent {
  readonly id = input<string>();
  readonly type = input<IButtonType>('button');
  readonly bsStyle = input<IButtonStyle>('primary');
  readonly shape = input<'circle'>();
  readonly bsSize = input<IButtonSize>('md');
  readonly bsPosition = input<IButtonPosition>('default');
  readonly bordered = input<boolean>();
  readonly icon = input<string>();
  readonly disabled = input(false);
  readonly showLoading = input(false);
  readonly width = input<string>();
  readonly autofocus = input(false);
  readonly loadingTemplateRef = input<TemplateRef<any>>();
  readonly btnClick = output<MouseEvent>();
  readonly buttonContent = viewChild.required<ElementRef>('buttonContent');

  handleDisabled($event: Event) {
    if (this.disabled()) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
    }
  }

  waveLeft = 0;
  waveTop = 0;
  readonly showWave = signal(false);
  readonly isMouseDown = signal(false);

  onClick(event) {
    if (!this.showLoading()) {
      this.btnClick.emit(event);
    }
    this.showClickWave(event);
  }

  showClickWave(event) {
    this.waveLeft = event.offsetX;
    this.waveTop = event.offsetY;
    this.showWave.set(true);
    setTimeout(() => {
      this.showWave.set(false);
    }, AnimationNumberDuration.SLOW);
  }

  hasContent() {
    const content = this.buttonContent();
    return !!content && content.nativeElement && content.nativeElement.innerHTML.trim();
  }
}
