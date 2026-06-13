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
  styleUrls: ['./button.component.scss'],
  host: {
    '(click)': 'handleDisabled($event)',
  },
  preserveWhitespaces: false,
})
export class ButtonComponent {
  id = input<string>();
  type = input<IButtonType>('button');
  bsStyle = input<IButtonStyle>('primary');
  shape = input<'circle'>();
  bsSize = input<IButtonSize>('md');
  bsPosition = input<IButtonPosition>('default');
  bordered = input<boolean>();
  icon = input<string>();
  disabled = input(false);
  showLoading = input(false);
  width = input<string>();
  autofocus = input(false);
  loadingTemplateRef = input<TemplateRef<any>>();
  btnClick = output<MouseEvent>();
  buttonContent = viewChild.required<ElementRef>('buttonContent');

  handleDisabled($event: Event) {
    if (this.disabled()) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
    }
  }

  waveLeft = 0;
  waveTop = 0;
  showWave = signal(false);
  isMouseDown = signal(false);

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
