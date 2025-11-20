import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbModule, SourceConfig } from 'ng-devui/breadcrumb';
@Component({
  selector: 'd-source-config',
  imports: [BreadcrumbModule],
  templateUrl: './source-config.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceConfigComponent {
  source: SourceConfig[] = [
    { title: 'DevUI', showMenu: false, link: '/components/zh-cn/get-start' },
    {
      title: 'Breadcrumb',
      showMenu: true,
      link: 'components/zh-cn/breadcrumb/demo',
      noNavigation: true,
      menuList: [
        { name: 'Anchor', link: '/components/zh-cn/anchor/demo', target: '_blank' },
        { name: 'Button', link: '/components/zh-cn/button/demo#button-primary', linkType: 'routerLink' },
      ],
    },
  ];
}
