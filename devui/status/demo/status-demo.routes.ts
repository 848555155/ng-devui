import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { BasicComponent } from './basic/basic.component';
import { StatusDesignComponent } from './status-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: StatusDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'status',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          component: BasicComponent,
          noDescription: true,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicCss },
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
