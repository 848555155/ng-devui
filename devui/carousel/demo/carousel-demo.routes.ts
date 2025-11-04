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
      demos: [
        {
          anchor: 'basic-usage',
          title: 'components.carousel.basicDemo.title',
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
          title: 'components.carousel.triggerDemo.title',
          description: 'components.carousel.triggerDemo.description',
          component: CarouselDemoTriggerComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./trigger/carousel-demo-trigger.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./trigger/carousel-demo-trigger.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./demo-common.scss?raw') },
          ],
        },
        {
          anchor: 'autoplay-usage',
          title: 'components.carousel.autoplayDemo.title',
          noDescription: true,
          component: CarouselDemoAutoPlayComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./autoplay/carousel-demo-autoplay.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./autoplay/carousel-demo-autoplay.component.ts?raw') },
          ],
        },
        {
          anchor: 'custom-usage',
          title: 'components.carousel.customDemo.title',
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
          title: 'components.carousel.withTransitionProgressDemo.title',
          noDescription: true,
          component: WithTransitionProgressComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./with-transition-progress/with-transition-progress.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./with-transition-progress/with-transition-progress.component.ts?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'basic-usage', value: 'components.carousel.anchorLinkValues.basic-usage' },
        { dAnchorLink: 'trigger-usage', value: 'components.carousel.anchorLinkValues.trigger-usage' },
        { dAnchorLink: 'autoplay-usage', value: 'components.carousel.anchorLinkValues.autoplay-usage' },
        { dAnchorLink: 'custom-usage', value: 'components.carousel.anchorLinkValues.custom-usage' },
        { dAnchorLink: 'with-transition-progress-usage', value: 'components.carousel.anchorLinkValues.with-transition-progress-usage' },
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
