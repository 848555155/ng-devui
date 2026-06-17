import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemType } from 'ng-devui/menu';

@Component({
  selector: 'd-loop-sub-menu',
  standalone: false,
  template: `
    <div
      dSubMenu
      [title]="menu.name"
      [icon]="menu.icon">
      @for (item of menu.children; track trackByMenu($index, item)) {
        @if (item.children?.length) {
          <d-loop-sub-menu [menu]="item" [activeKey]="activeKey" (itemClick)="onClick($event)" />
        } @else {
          <div dMenuItem [active]="activeKey === item.key" (itemClick)="onClick(item.key)">
            @if (item.icon) {
              <d-icon class="devui-menu-item-icon" [icon]="item.icon" />
            }
            <span class="devui-menu-item-name over-flow-ellipsis">{{ item.name }}</span>
          </div>
        }
      }
    </div>`,
})
export class LoopSubMenuComponent {
  @Input() activeKey = '';
  @Input({ required: true }) menu: MenuItemType;
  @Output() itemClick = new EventEmitter<string>();

  onClick(key) {
    this.itemClick.emit(key);
  }

  trackByMenu(_: number, item: MenuItemType) {
    return item.key;
  }
}
