import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-breadcrumb-design',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './breadcrumb-design.component.html',
})
export class BreadcrumbDesignComponent {
  imgSrc = environment.deployPrefix + 'assets/no-data.png';
}
