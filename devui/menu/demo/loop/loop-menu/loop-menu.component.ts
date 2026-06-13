import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItemClickType, MenuItemType } from 'ng-devui/menu';

@Component({
  selector: 'd-loop-menu',
  standalone: false,
  template: `
    <div dMenu [collapsed]="collapsed" (menuItemClick)="menuItemClick($event)">
      @for (item of menus; track trackByMenu($index, item)) {
        @if (item.children?.length) {
          <d-loop-sub-menu
            [menu]="item"
            [activeKey]="activeKey"
            (itemClick)="itemClick($event)"
            />
        } @else {
          <div
            dMenuItem
            [active]="activeKey === item.key"
            (itemClick)="itemClick(item.key)"
            dTooltip [content]="collapsed ? item.name : ''" position="right">
            @if (item.icon) {
              <d-icon class="devui-menu-item-icon" [icon]="item.icon" />
            }
            <span class="devui-menu-item-name over-flow-ellipsis">{{ item.name }}</span>
          </div>
        }
      }
    </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoopMenuComponent {
  @Input() collapsed = false;
  @Input() menus: MenuItemType[] = [];

  activeKey = '';

  itemClick(key: string) {
    this.activeKey = key;
  }

  menuItemClick(event: MenuItemClickType) {
    console.log('menuItemClick', event);
  }

  trackByMenu(_: number, item: MenuItemType) {
    return item.key;
  }
}
