import { Routes } from '@angular/router';
import { BackTopDesignComponent } from './back-top-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { BasicComponent } from './basic/basic.component';
import { CustomizeComponent } from './customize/customize.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: BackTopDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      demos: [
        {
          anchor: 'back-top-basic',
          title: 'components.back-top.basicDemo.title',
          description: 'components.back-top.basicDemo.description',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'back-top-customize',
          title: 'components.back-top.customizeDemo.title',
          description: 'components.back-top.customizeDemo.description',
          component: CustomizeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./customize/customize.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./customize/customize.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./customize/customize.component.scss?raw') },
          ],
        },
        {
          anchor: 'back-top-scroll-container',
          title: 'components.back-top.scrollDemo.title',
          description: 'components.back-top.scrollDemo.description',
          component: ScrollContainerComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./scroll-container/scroll-container.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./scroll-container/scroll-container.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./scroll-container/scroll-container.component.scss?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'back-top-basic', value: 'components.back-top.anchorLinkValues.back-top-basic' },
        { dAnchorLink: 'back-top-customize', value: 'components.back-top.anchorLinkValues.back-top-customize' },
        { dAnchorLink: 'back-top-scroll-container', value: 'components.back-top.anchorLinkValues.back-top-scroll-container' },
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
