import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItemType } from 'ng-devui/menu';

const MENUS: MenuItemType[] = [
  {
    key: 'c-1',
    icon: 'icon-more-func',
    name: 'Content 1 (as a leaf menu)'
  },
  {
    key: 'c-2',
    name: 'Content 2 (as a parent menu, has children)',
    icon: 'icon-more-func',
    children: [
      {
        key: 'c-2-1',
        name: 'Content 2 Child 1'
      },
      {
        key: 'c-2-2',
        name: 'Content 2 Child 2'
      },
      {
        key: 'c-2-3',
        name: 'Content 2 Child 3'
      },
    ]
  }, {
    key: 'c-3',
    name: 'Content 3 (as a parent menu, has children)',
    icon: 'icon-more-func',
    children: [
      {
        key: 'c-3-1',
        name: 'Content 3 Child 1'
      },
      {
        key: 'c-3-2',
        name: 'Content 3 Child 2',
      },
      {
        key: 'c-3-3',
        name: 'Content 3 Child 3',
      },
      {
        key: 'c-3-4',
        name: 'Content 3 Child 4',
      },
    ]
  },
  {
    key: 'c-4',
    icon: 'icon-more-func',
    name: 'Content 4 (as a leaf menu)',
  }
];


@Component({
    selector: 'd-custom-node',
    templateUrl: './custom-node.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CustomNodeComponent {
  menus = MENUS;
  openKeys: string[] = [];
  activeKey = '';

  openChange(open: boolean, key: string) {
    if (open) {
      this.openKeys.push(key);
    } else {
      this.openKeys = this.openKeys.filter(item => item !== key);
    }
  }

  itemClick(key: string) {
    this.activeKey = key;
  }

  trackByMenu(_: number, item: MenuItemType) {
    return item.key;
  }
}
