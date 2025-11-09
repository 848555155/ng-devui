import { transition, trigger } from '@angular/animations';
import { booleanAttribute, ChangeDetectionStrategy, Component, contentChild, inject, input, Input, model, output } from '@angular/core';
import { DevConfigService, expandCollapseForDomDestroy, WithConfig } from 'ng-devui/utils';
import { firstValueFrom, isObservable, Observable } from 'rxjs';
import { PanelBodyComponent } from './panel-body.component';
import { PanelFooterComponent } from './panel-footer.component';
import { PanelHeaderComponent } from './panel-header.component';
import { PanelType } from './panel.types';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'd-panel',
  imports: [NgTemplateOutlet],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [trigger('noAnimation', [transition(':enter', [])]), expandCollapseForDomDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent {
  type = input<PanelType>('default');
  cssClass = input<string>();
  isCollapsed = model<boolean>();
  hasLeftPadding = input(true, { transform: booleanAttribute });
  @Input() @WithConfig() showAnimation = true;
  beforeToggle = input(() => Promise.resolve(true), {
    transform: (fuc: (collapse: boolean) => boolean | Promise<boolean> | Observable<boolean>) => {
      if (!fuc){
        return () => Promise.resolve(true);
      }
      return async (collapse: boolean) => {
        const result = fuc(collapse);
        if (Promise.resolve(result) === result) {
          return await result;
        }
        if (isObservable(result)) {
          return await firstValueFrom(result);
        }
        return Promise.resolve(result);
      };
    },
  });
  toggle = output<boolean>();
  panelHeader = contentChild(PanelHeaderComponent);
  panelFooter = contentChild(PanelFooterComponent);
  panelBody = contentChild(PanelBodyComponent);
  private devConfigService = inject(DevConfigService);
  toggleBody() {
    this.canToggle().then((val) => {
      if (!val) {
        return;
      }
      if (this.isCollapsed() !== undefined) {
        this.isCollapsed.set(!this.isCollapsed());
        this.toggle.emit(this.isCollapsed());
      }
    });
  }

  canToggle() {
    return this.beforeToggle()(this.isCollapsed());
  }
}
