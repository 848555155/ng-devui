import { Component, forwardRef, inject, input, Input, TemplateRef } from '@angular/core';
import { BreadCrumbService } from './breadcrumb.service';
import { BREADCRUMB } from './breadcrumb.token';
import { SourceConfig } from './breadcrumb.type';
import { BreadCrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'd-breadcrumb',
  exportAs: 'dBreadcrumb',
  standalone: true,
  imports: [BreadCrumbItemComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  preserveWhitespaces: false,
  providers: [
    {
      provide: BREADCRUMB,
      useExisting: forwardRef(() => BreadCrumbComponent),
    },
  ],
})
export class BreadCrumbComponent {
  separatorIcon = input<TemplateRef<any>>();
  source = input<Array<SourceConfig>>();
  private breadCrumbService = inject(BreadCrumbService);
  navigateTo($event: MouseEvent, item: SourceConfig) {
    this.breadCrumbService.navigateTo($event, item);
  }
}
