import { transition, trigger } from '@angular/animations';
import { Component, contentChild, input, Input, output } from '@angular/core';
import { DevConfigService, expandCollapseForDomDestroy, WithConfig } from 'ng-devui/utils';
import { lastValueFrom, Observable } from 'rxjs';
import { PanelBodyComponent } from './panel-body.component';
import { PanelFooterComponent } from './panel-footer.component';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelType } from './panel.types';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'd-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [trigger('noAnimation', [transition(':enter', [])]), expandCollapseForDomDestroy],
})
export class PanelComponent {
  type = input<PanelType>('default');
  cssClass = input<string>();
  @Input() isCollapsed: boolean;
  hasLeftPadding = input(true, {
    transform: coerceBooleanProperty,
  });
  @Input() @WithConfig() showAnimation = true;
  @Input() beforeToggle: (value) => boolean | Promise<boolean> | Observable<boolean>;
  toggle = output<boolean>();
  panelHeader = contentChild(PanelHeaderComponent);
  panelFooter = contentChild(PanelFooterComponent);
  panelBody = contentChild(PanelBodyComponent);
  constructor(private devConfigService: DevConfigService) {}
  toggleBody() {
    this.canToggle().then((val) => {
      if (!val) {
        return;
      }
      if (this.isCollapsed !== undefined) {
        this.isCollapsed = !this.isCollapsed;
        this.toggle.emit(this.isCollapsed);
      }
    });
  }

  canToggle() {
    let changeResult = Promise.resolve(true);

    if (this.beforeToggle) {
      const result: any = this.beforeToggle(this.isCollapsed);
      if (typeof result !== 'undefined') {
        if (result.then) {
          changeResult = result;
        } else if (result.subscribe) {
          changeResult = lastValueFrom(result as Observable<boolean>);
        } else {
          changeResult = Promise.resolve(result);
        }
      }
    }

    return changeResult;
  }
}
