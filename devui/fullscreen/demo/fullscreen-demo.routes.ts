import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { FullscreenDesignComponent } from './fullscreen-design.component';
import { FullscreenDemoImmersiveComponent } from './immersive/immersive.component';
import { FullscreenDemoNormalComponent } from './normal/normal.component';

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
              code: require('./normal/normal.component.html?raw'),
            },
            {
              title: 'TS',
              language: 'typescript',
              code: require('./normal/normal.component.ts?raw'),
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
              code: require('./immersive/immersive.component.html?raw'),
            },
            {
              title: 'TS',
              language: 'typescript',
              code: require('./immersive/immersive.component.ts?raw'),
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
      'zh-cn': require('!html-loader!markdown-loader!../doc/api-cn.md'),
      'en-us': require('!html-loader!markdown-loader!../doc/api-en.md'),
    },
  },
] as Routes;
