import { transition, trigger } from '@angular/animations';
import { booleanAttribute, Component, contentChild, inject, input, Input, model, output } from '@angular/core';
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
  styleUrl: './panel.component.scss',
  animations: [trigger('noAnimation', [transition(':enter', [])]), expandCollapseForDomDestroy]
})
export class PanelComponent {
  readonly type = input<PanelType>('default');
  readonly cssClass = input<string>();
  readonly isCollapsed = model<boolean>();
  readonly hasLeftPadding = input(true, { transform: booleanAttribute });
  @Input() @WithConfig() showAnimation = true;
  readonly beforeToggle = input(() => Promise.resolve(true), {
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
  readonly panelHeader = contentChild(PanelHeaderComponent);
  readonly panelFooter = contentChild(PanelFooterComponent);
  readonly panelBody = contentChild(PanelBodyComponent);
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
