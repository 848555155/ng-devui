import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { RelativeTimeDesignComponent } from './relative-time-design.component';
import { BasicComponent } from './basic/basic.component';
import { CustomTimeComponent } from './custom-time/custom-time.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import customTimeHtml from './custom-time/custom-time.component.html?raw';
import customTimeTs from './custom-time/custom-time.component.ts.txt?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: RelativeTimeDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'relative-time',
      demos: [
        {
          noAnchor: true,
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
          ],
        },
        {
          noAnchor: true,
          name: 'customDemo',
          component: CustomTimeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: customTimeHtml },
            { title: 'TS', language: 'typescript', code: customTimeTs },
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
