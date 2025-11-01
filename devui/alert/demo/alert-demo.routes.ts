import { Routes } from '@angular/router';
import { AlertDesignComponent } from './alert-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { AlertDemoComponent } from './alert-demo.component';

import { BasicComponent } from './basic/basic.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseComponent } from './close/close.component';
import { WithoutIconComponent } from './withoutIcon/withoutIcon.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AlertDesignComponent,
  },
  {
    path: 'demo',
    component: AlertDemoComponent,
    data: {
      demos: [
        {
          anchor: 'basic-usage',
          title: 'alert.demo.basic.title',
          description: 'alert.demo.basic.description',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
          ],
        },
        {
          anchor: 'tips-to-close',
          title: 'alert.demo.close.title',
          description: 'alert.demo.close.description',
          component: CloseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./close/close.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./close/close.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./close/close.component.css?raw') },
          ],
        },
        {
          anchor: 'without-icon',
          title: 'alert.demo.withoutIcon.title',
          description: 'alert.demo.withoutIcon.description',
          component: WithoutIconComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./withoutIcon/withoutIcon.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./withoutIcon/withoutIcon.component.ts?raw') },
          ],
        },
        {
          anchor: 'carousel',
          title: 'alert.demo.carousel.title',
          description: 'alert.demo.carousel.description',
          component: CarouselComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./carousel/carousel.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./carousel/carousel.component.ts?raw') },
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
