import { NgModule } from '@angular/core';
import { BreadCrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadCrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [BreadCrumbComponent, BreadCrumbItemComponent],
  exports: [BreadCrumbComponent, BreadCrumbItemComponent],
})
export class BreadcrumbModule {}
