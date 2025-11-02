import { Routes } from '@angular/router';
import { AlertDesignComponent } from './alert-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';

import { BasicComponent } from './basic/basic.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseComponent } from './close/close.component';
import { WithoutIconComponent } from './withoutIcon/withoutIcon.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';

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
      demos: [
        {
          anchor: 'basic-usage',
          title: 'components.alert.basicDemo.title',
          description: 'components.alert.basicDemo.description',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
          ],
        },
        {
          anchor: 'tips-to-close',
          title: 'components.alert.closeDemo.title',
          description: 'components.alert.closeDemo.description',
          component: CloseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./close/close.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./close/close.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./close/close.component.css?raw') },
          ],
        },
        {
          anchor: 'without-icon',
          title: 'components.alert.withoutIconDemo.title',
          description: 'components.alert.withoutIconDemo.description',
          component: WithoutIconComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./withoutIcon/withoutIcon.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./withoutIcon/withoutIcon.component.ts?raw') },
          ],
        },
        {
          anchor: 'carousel',
          title: 'components.alert.carouselDemo.title',
          description: 'components.alert.carouselDemo.description',
          component: CarouselComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./carousel/carousel.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./carousel/carousel.component.ts?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'basic-usage', value: 'components.alert.anchorLinkValues.basic-usage' },
        { dAnchorLink: 'tips-to-close', value: 'components.alert.anchorLinkValues.tips-to-close' },
        { dAnchorLink: 'without-icon', value: 'components.alert.anchorLinkValues.without-icon' },
        { dAnchorLink: 'carousel', value: 'components.alert.anchorLinkValues.carousel' },
      ]
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
