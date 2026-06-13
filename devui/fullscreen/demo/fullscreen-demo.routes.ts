import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { FullscreenDesignComponent } from './fullscreen-design.component';
import { FullscreenDemoImmersiveComponent } from './immersive/immersive.component';
import { FullscreenDemoNormalComponent } from './normal/normal.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import normalHtml from './normal/normal.component.html?raw';
import normalTs from './normal/normal.component.ts.txt?raw';
import immersiveHtml from './immersive/immersive.component.html?raw';
import immersiveTs from './immersive/immersive.component.ts.txt?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: FullscreenDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'fullscreen',
      demos: [
        {
          anchor: 'immersive-full-screen',
          name: 'immersiveDemo',
          component: FullscreenDemoImmersiveComponent,
          source: [
            {
              title: 'HTML',
              language: 'xml',
              code: normalHtml,
            },
            {
              title: 'TS',
              language: 'typescript',
              code: normalTs,
            },
          ],
        },
        {
          anchor: 'general-full-screen',
          name: 'normalDemo',
          component: FullscreenDemoNormalComponent,
          source: [
            {
              title: 'HTML',
              language: 'xml',
              code: immersiveHtml,
            },
            {
              title: 'TS',
              language: 'typescript',
              code: immersiveTs,
            },
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
