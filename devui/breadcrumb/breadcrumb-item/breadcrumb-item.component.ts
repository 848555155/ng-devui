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
  imports: [DropDownModule, SearchModule, NgTemplateOutlet],
  templateUrl: './breadcrumb-item.component.html',
  styleUrl: './breadcrumb-item.component.scss',
  exportAs: 'dBreadcrumbItem',
  preserveWhitespaces: false
})
export class BreadCrumbItemComponent {
  readonly showMenu = input(false, { transform: booleanAttribute });
  readonly customMenuTemplate = input<TemplateRef<any>>();
  readonly menuList = input<Array<MenuConfig>>();
  readonly isSearch = input(false, { transform: booleanAttribute });
  readonly toggleEvent = output<boolean>();

  readonly menuListDisplay = linkedSignal(() => this.menuList());
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
