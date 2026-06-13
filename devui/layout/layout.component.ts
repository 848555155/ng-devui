import { Component, ContentChildren, HostBinding, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { AsideComponent } from './elements/aside.component';

@Component({
  selector: 'd-layout',
  template: '<ng-content></ng-content>',
  styleUrls: ['./layout.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LayoutComponent {
  @ContentChildren(AsideComponent) listOfSideBarComponent: QueryList<AsideComponent>;
  @HostBinding('class.d-layout-aside')
  get layoutSideBar(): boolean {
    return this.listOfSideBarComponent && this.listOfSideBarComponent.length > 0;
  }

  @HostBinding('class.d-layout') default = true;
}
