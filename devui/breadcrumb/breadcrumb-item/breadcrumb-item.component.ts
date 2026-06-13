import {
  booleanAttribute,
  Component,
  inject,
  input,
  linkedSignal,
  output,
  TemplateRef,
} from '@angular/core';
import { BreadCrumbService } from '../breadcrumb.service';
import { BREADCRUMB } from '../breadcrumb.token';
import { MenuConfig } from '../breadcrumb.type';
import { DropDownModule } from 'ng-devui/dropdown';
import { NgTemplateOutlet } from '@angular/common';
import { SearchModule } from 'ng-devui/search';

@Component({
  selector: 'd-breadcrumb-item',
  exportAs: 'dBreadcrumbItem',
  imports: [DropDownModule, SearchModule, NgTemplateOutlet],
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
  preserveWhitespaces: false,
})
export class BreadCrumbItemComponent {
  showMenu = input(false, { transform: booleanAttribute });
  customMenuTemplate = input<TemplateRef<any>>();
  menuList = input<Array<MenuConfig>>();
  isSearch = input(false, { transform: booleanAttribute });
  toggleEvent = output<boolean>();

  menuListDisplay = linkedSignal(() => this.menuList());
  isOpen: boolean;

  breadCrumbComponent = inject(BREADCRUMB);
  private breadCrumbService = inject(BreadCrumbService);

  onToggle($event: boolean) {
    this.isOpen = $event;
    this.toggleEvent.emit($event);
  }
  searchEvent($event: string) {
    if (this.menuList()) {
      this.menuListDisplay.set(this.menuList().filter((item) => item.name.toLowerCase().includes($event.toLowerCase())));
    }
  }
  navigateTo($event: MouseEvent, item) {
    this.breadCrumbService.navigateTo($event, item);
  }
}
