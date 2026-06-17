import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardDirective } from 'ng-devui/common';
import { TextInputModule } from 'ng-devui/text-input';

@Component({
  selector: 'd-common-clipboard',
  imports: [TextInputModule, ClipboardDirective, JsonPipe, FormsModule],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.scss',
})
export class ClipboardDemoComponent {
  value = 'Copied Content';
  result: JSON;

  copyResultEvent(event: JSON) {
    this.result = event;
  }
}
