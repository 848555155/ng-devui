import { Component } from '@angular/core';
import { BreadcrumbModule } from 'ng-devui/breadcrumb';
@Component({
  selector: 'd-menu',
  imports: [BreadcrumbModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  breadData = [
    { label: 'DevUI', showMenu: false, link: '/components/zh-cn/get-start' },
    {
      label: 'Breadcrumb',
      showMenu: true,
      isSearch: true,
      menuList: [
        { name: 'Anchor', link: '/components/zh-cn/anchor/demo' },
        { name: 'Button', link: '/components/zh-cn/button/demo' },
      ],
    },
  ];

  toggleEvent(event) {
    console.log(event);
  }
}
