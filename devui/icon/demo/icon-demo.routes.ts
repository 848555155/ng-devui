import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { IconDesignComponent } from './icon-design.component';
import { BasicComponent } from './basic/basic.component';
import { IconGroupDemoComponent } from './icon-group/icon-group.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import iconGroupHtml from './icon-group/icon-group.component.html?raw';
import iconGroupTs from './icon-group/icon-group.component.ts.txt?raw';
import iconGroupScss from './icon-group/icon-group.component.scss?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: IconDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'icon',
      demos: [
        {
          anchor: 'basic',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'html', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'CSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'icon-group',
          name: 'iconGroupDemo',
          component: IconGroupDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: iconGroupHtml },
            { title: 'TS', language: 'typescript', code: iconGroupTs },
            { title: 'CSS', language: 'css', code: iconGroupScss },
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
