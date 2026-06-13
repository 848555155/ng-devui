import { Routes } from '@angular/router';
import { BackTopDesignComponent } from './back-top-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { BasicComponent } from './basic/basic.component';
import { CustomizeComponent } from './customize/customize.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import customizeHtml from './customize/customize.component.html?raw';
import customizeTs from './customize/customize.component.ts.txt?raw';
import customizeScss from './customize/customize.component.scss?raw';
import scrollContainerHtml from './scroll-container/scroll-container.component.html?raw';
import scrollContainerTs from './scroll-container/scroll-container.component.ts.txt?raw';
import scrollContainerScss from './scroll-container/scroll-container.component.scss?raw';

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
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'back-top-customize',
          name: 'customizeDemo',
          component: CustomizeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: customizeHtml },
            { title: 'TS', language: 'typescript', code: customizeTs },
            { title: 'SCSS', language: 'css', code: customizeScss },
          ],
        },
        {
          anchor: 'back-top-scroll-container',
          name: 'scrollDemo',
          component: ScrollContainerComponent,
          source: [
            { title: 'HTML', language: 'xml', code: scrollContainerHtml },
            { title: 'TS', language: 'typescript', code: scrollContainerTs },
            { title: 'SCSS', language: 'css', code: scrollContainerScss },
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
