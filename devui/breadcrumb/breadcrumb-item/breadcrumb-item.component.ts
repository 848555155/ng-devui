
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Inject, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BreadCrumbService } from '../breadcrumb.service';
import { BREADCRUMB } from '../breadcrumb.token';
import { MenuConfig } from '../breadcrumb.type';
import { CommonModule } from '@angular/common';
import { SearchModule } from 'ng-devui/search';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'd-breadcrumb-item',
  exportAs: 'dBreadcrumbItem',
  standalone: true,
  imports: [CommonModule, SearchModule],
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss'],
  preserveWhitespaces: false,
})
export class BreadCrumbItemComponent implements OnInit {

  @Input() showMenu = false;
  @Input() customMenuTemplate: TemplateRef<any>;
  @Input() menuList: Array<MenuConfig>;
  @Input() isSearch = false;
  @Output() toggleEvent = new EventEmitter<boolean>();

  menuListDisplay: Array<MenuConfig>;
  isOpen: boolean;

  breadCrumbComponent = inject(BREADCRUMB);
  private breadCrumbService = inject(BreadCrumbService);

  ngOnInit(): void {
    this.menuListDisplay = this.menuList;
  }
  onToggle($event) {
    this.isOpen = $event;
    this.toggleEvent.emit($event);
  }
  searchEvent($event) {
    if (this.menuList) {
      this.menuListDisplay = this.menuList.filter(item => item.name.toLowerCase().includes($event.toLowerCase()));
    }
  }
  navigateTo($event, item) {
    this.breadCrumbService.navigateTo($event, item);
  }
}
