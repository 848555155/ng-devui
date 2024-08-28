import { NgModule } from '@angular/core';
import { SearchModule } from 'ng-devui/search';
import { BreadCrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadCrumbComponent } from './breadcrumb.component';
import { BreadCrumbService } from './breadcrumb.service';

@NgModule({
  imports: [SearchModule, BreadCrumbComponent, BreadCrumbItemComponent],
  exports: [BreadCrumbComponent, BreadCrumbItemComponent],
  providers: [BreadCrumbService],
})
export class BreadcrumbModule {}
