import { Routes } from '@angular/router';
import { AvatarDesignComponent } from './avatar-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { BasicComponent } from './basic/basic.component';
import { ConfigComponent } from './config/config.component';
import { SpecialComponent } from './special/special.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import specialHtml from './special/special.component.html?raw';
import specialTs from './special/special.component.ts.txt?raw';
import specialCss from './special/special.component.css?raw';
import configHtml from './config/config.component.html?raw';
import configTs from './config/config.component.ts.txt?raw';
import configCss from './config/config.component.css?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AvatarDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'avatar',
      demos: [
        {
          anchor: 'basic-rules',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicCss },
          ],
        },
        {
          anchor: 'basic-configuration',
          name: 'configDemo',
          component: ConfigComponent,
          source: [
            { title: 'HTML', language: 'xml', code: specialHtml },
            { title: 'TS', language: 'typescript', code: specialTs },
            { title: 'SCSS', language: 'css', code: specialCss },
          ],
        },
        {
          anchor: 'special-display',
          name: 'specialDemo',
          component: SpecialComponent,
          source: [
            { title: 'HTML', language: 'xml', code: configHtml },
            { title: 'TS', language: 'typescript', code: configTs },
            { title: 'SCSS', language: 'css', code: configCss },
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
