import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbModule } from 'ng-devui/breadcrumb';
@Component({
  selector: 'd-basic',
  imports: [BreadcrumbModule, RouterLink],
  templateUrl: './basic.component.html',
})
export class BasicComponent {}
