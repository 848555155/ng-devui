import { Routes } from '@angular/router';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { CarouselDesignComponent } from './carousel-design.component';
import { WithTransitionProgressComponent } from './with-transition-progress/with-transition-progress.component';
import { CarouselDemoBasicComponent } from './basic/carousel-demo-basic.component';
import { CarouselDemoTriggerComponent } from './trigger/carousel-demo-trigger.component';
import { CarouselDemoAutoPlayComponent } from './autoplay/carousel-demo-autoplay.component';
import { CarouselDemoCustomComponent } from './custom/carousel-demo-custom.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: CarouselDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'carousel',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          noDescription: true,
          component: CarouselDemoBasicComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./basic/carousel-demo-basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/carousel-demo-basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./demo-common.scss?raw') },
          ],
        },
        {
          anchor: 'trigger-usage',
          name: 'triggerDemo',
          component: CarouselDemoTriggerComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./trigger/carousel-demo-trigger.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./trigger/carousel-demo-trigger.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./demo-common.scss?raw') },
          ],
        },
        {
          anchor: 'autoplay-usage',
          name: 'autoplayDemo',
          noDescription: true,
          component: CarouselDemoAutoPlayComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./autoplay/carousel-demo-autoplay.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./autoplay/carousel-demo-autoplay.component.ts?raw') },
          ],
        },
        {
          anchor: 'custom-usage',
          name: 'customDemo',
          noDescription: true,
          component: CarouselDemoCustomComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./custom/carousel-demo-custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/carousel-demo-custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./demo-common.scss?raw') },
          ],
        },
        {
          anchor: 'with-transition-progress-usage',
          name: 'withTransitionProgressDemo',
          noDescription: true,
          component: WithTransitionProgressComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./with-transition-progress/with-transition-progress.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./with-transition-progress/with-transition-progress.component.ts?raw') },
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
