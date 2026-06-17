import { Component, inject, input, TemplateRef } from '@angular/core';
import { BreadCrumbService } from './breadcrumb.service';
import { BREADCRUMB } from './breadcrumb.token';
import { SourceConfig } from './breadcrumb.type';
import { BreadCrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'd-breadcrumb',
  imports: [BreadCrumbItemComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  providers: [{
    provide: BREADCRUMB,
    useExisting: BreadCrumbComponent
  }],
  exportAs: 'dBreadcrumb',
  preserveWhitespaces: false
})
export class BreadCrumbComponent {
  readonly separatorIcon = input<TemplateRef<any>>();
  readonly source = input<Array<SourceConfig>>([]);
  private breadCrumbService = inject(BreadCrumbService);
  navigateTo($event: MouseEvent, item: SourceConfig) {
    this.breadCrumbService.navigateTo($event, item);
  }
}
