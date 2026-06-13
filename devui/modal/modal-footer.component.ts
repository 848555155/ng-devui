import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IButtonStyle } from 'ng-devui/button';

@Component({
  selector: 'd-modal-footer',
  standalone: false,
  templateUrl: './modal-footer.component.html',
  styleUrl: './modal-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  preserveWhitespaces: false
})
export class ModalFooterComponent {
  @Input() buttons: Array<{
    id?: string;
    cssClass?: IButtonStyle;
    text: string;
    handler: ($event: Event) => void;
    btnwidth?: string;
    autofocus?: boolean;
    disabled: boolean;
  }>;
}
