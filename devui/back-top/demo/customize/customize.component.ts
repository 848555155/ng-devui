import { Component, viewChild } from '@angular/core';
import { BackTopComponent } from 'ng-devui/back-top';
import { TooltipDirective, TooltipModule } from 'ng-devui/tooltip';

@Component({
  selector: 'd-back-top-customize',
  imports: [BackTopComponent, TooltipModule],
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss',
})
export class CustomizeComponent {
  readonly tooltipItem = viewChild(TooltipDirective);
  content = 'Back to the top';

  toggleTooltip(toggle: boolean) {
    if (this.tooltipItem()) {
      if (toggle) {
        this.tooltipItem().content = '';
        this.tooltipItem().hide();
      } else {
        this.tooltipItem().content = this.content;
      }
    }
  }

  backTop(event: boolean) {
    console.log(event);
  }
}
