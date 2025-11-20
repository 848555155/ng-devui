import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { BreadcrumbDesignComponent } from './breadcrumb-design.component';
import { ClickBlockComponent } from './click-block/click-block.component';
import { CustomComponent } from './custom/custom.component';
import { MenuComponent } from './menu/menu.component';
import { SourceConfigComponent } from './source-config/source-config.component';

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
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
          ],
        },
        {
          anchor: 'source-config-breadcrumbs',
          name: 'sourceDemo',
          noDescription: true,
          component: SourceConfigComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./source-config/source-config.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./source-config/source-config.component.ts?raw') },
          ],
        },
        {
          anchor: 'drop-down-breadcrumbs',
          name: 'menuDemo',
          noDescription: true,
          component: MenuComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom/custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./custom/custom.component.scss?raw') },
          ],
        },
        {
          anchor: 'self-defined-breadcrumbs',
          name: 'customDemo',
          noDescription: true,
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./menu/menu.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./menu/menu.component.ts?raw') },
          ],
        },
        {
          anchor: 'click-block-breadcrumbs',
          name: 'clickBlockDemo',
          noDescription: true,
          component: ClickBlockComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./click-block/click-block.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./click-block/click-block.component.ts?raw') },
          ],
        },
      ],
    },
  },
  {
    path: 'api',
    component: DevUIApiComponent,
    data: {
      'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
      'en-us': require('!html-loader!markdown-loader!../doc/api-en.md'),
    },
  },
] as Routes;
