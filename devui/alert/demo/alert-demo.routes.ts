import { Routes } from '@angular/router';
import { AlertDesignComponent } from './alert-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';

import { BasicComponent } from './basic/basic.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseComponent } from './close/close.component';
import { WithoutIconComponent } from './withoutIcon/withoutIcon.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import closeHtml from './close/close.component.html?raw';
import closeTs from './close/close.component.ts.txt?raw';
import closeCss from './close/close.component.css?raw';
import withoutIconHtml from './withoutIcon/withoutIcon.component.html?raw';
import withoutIconTs from './withoutIcon/withoutIcon.component.ts.txt?raw';
import carouselHtml from './carousel/carousel.component.html?raw';
import carouselTs from './carousel/carousel.component.ts.txt?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AlertDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'alert',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
          ],
        },
        {
          anchor: 'tips-to-close',
          name: 'closeDemo',
          component: CloseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: closeHtml },
            { title: 'TS', language: 'typescript', code: closeTs },
            { title: 'SCSS', language: 'css', code: closeCss },
          ],
        },
        {
          anchor: 'without-icon',
          name: 'withoutIconDemo',
          component: WithoutIconComponent,
          source: [
            { title: 'HTML', language: 'xml', code: withoutIconHtml },
            { title: 'TS', language: 'typescript', code: withoutIconTs },
          ],
        },
        {
          anchor: 'carousel',
          name: 'carouselDemo',
          component: CarouselComponent,
          source: [
            { title: 'HTML', language: 'xml', code: carouselHtml },
            { title: 'TS', language: 'typescript', code: carouselTs },
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
