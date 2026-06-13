import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { BreadcrumbDesignComponent } from './breadcrumb-design.component';
import { ClickBlockComponent } from './click-block/click-block.component';
import { CustomComponent } from './custom/custom.component';
import { MenuComponent } from './menu/menu.component';
import { SourceConfigComponent } from './source-config/source-config.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import sourceConfigHtml from './source-config/source-config.component.html?raw';
import sourceConfigTs from './source-config/source-config.component.ts.txt?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';
import menuHtml from './menu/menu.component.html?raw';
import menuTs from './menu/menu.component.ts.txt?raw';
import clickBlockHtml from './click-block/click-block.component.html?raw';
import clickBlockTs from './click-block/click-block.component.ts.txt?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: BreadcrumbDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'breadcrumb',
      demos: [
        {
          anchor: 'basic-breadcrumbs',
          name: 'basicDemo',
          noDescription: true,
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
          ],
        },
        {
          anchor: 'source-config-breadcrumbs',
          name: 'sourceDemo',
          noDescription: true,
          component: SourceConfigComponent,
          source: [
            { title: 'HTML', language: 'xml', code: sourceConfigHtml },
            { title: 'TS', language: 'typescript', code: sourceConfigTs },
          ],
        },
        {
          anchor: 'drop-down-breadcrumbs',
          name: 'menuDemo',
          noDescription: true,
          component: MenuComponent,
          source: [
            { title: 'HTML', language: 'xml', code: customHtml },
            { title: 'TS', language: 'typescript', code: customTs },
            { title: 'SCSS', language: 'css', code: customScss },
          ],
        },
        {
          anchor: 'self-defined-breadcrumbs',
          name: 'customDemo',
          noDescription: true,
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: menuHtml },
            { title: 'TS', language: 'typescript', code: menuTs },
          ],
        },
        {
          anchor: 'click-block-breadcrumbs',
          name: 'clickBlockDemo',
          noDescription: true,
          component: ClickBlockComponent,
          source: [
            { title: 'HTML', language: 'xml', code: clickBlockHtml },
            { title: 'TS', language: 'typescript', code: clickBlockTs },
          ],
        },
      ],
    },
  },
  {
    path: 'api',
    component: DevUIApiComponent,
    data: {
      'zh-cn': marked.parse(apiCn),
      'en-us': marked.parse(apiEn),
    },
  },
] as Routes;
