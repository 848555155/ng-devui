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
      categoryName: 'back-top',
      demos: [
        {
          anchor: 'back-top-basic',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'back-top-customize',
          name: 'customizeDemo',
          component: CustomizeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./customize/customize.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./customize/customize.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./customize/customize.component.scss?raw') },
          ],
        },
        {
          anchor: 'back-top-scroll-container',
          name: 'scrollDemo',
          component: ScrollContainerComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./scroll-container/scroll-container.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./scroll-container/scroll-container.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./scroll-container/scroll-container.component.scss?raw') },
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
