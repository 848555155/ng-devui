import { Routes } from '@angular/router';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { CarouselDesignComponent } from './carousel-design.component';
import { WithTransitionProgressComponent } from './with-transition-progress/with-transition-progress.component';
import { CarouselDemoBasicComponent } from './basic/carousel-demo-basic.component';
import { CarouselDemoTriggerComponent } from './trigger/carousel-demo-trigger.component';
import { CarouselDemoAutoPlayComponent } from './autoplay/carousel-demo-autoplay.component';
import { CarouselDemoCustomComponent } from './custom/carousel-demo-custom.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/carousel-demo-basic.component.html?raw';
import basicTs from './basic/carousel-demo-basic.component.ts.txt?raw';
import triggerHtml from './trigger/carousel-demo-trigger.component.html?raw';
import triggerTs from './trigger/carousel-demo-trigger.component.ts.txt?raw';
import autoplayHtml from './autoplay/carousel-demo-autoplay.component.html?raw';
import autoplayTs from './autoplay/carousel-demo-autoplay.component.ts.txt?raw';
import customHtml from './custom/carousel-demo-custom.component.html?raw';
import customTs from './custom/carousel-demo-custom.component.ts.txt?raw';
import withTransitionProgressHtml from './with-transition-progress/with-transition-progress.component.html?raw';
import withTransitionProgressTs from './with-transition-progress/with-transition-progress.component.ts.txt?raw';
import demoCommonScss from './demo-common.scss?raw';

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
            { title: 'HTML', language: 'html', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: demoCommonScss },
          ],
        },
        {
          anchor: 'trigger-usage',
          name: 'triggerDemo',
          component: CarouselDemoTriggerComponent,
          source: [
            { title: 'HTML', language: 'html', code: triggerHtml },
            { title: 'TS', language: 'typescript', code: triggerTs },
            { title: 'SCSS', language: 'css', code: demoCommonScss },
          ],
        },
        {
          anchor: 'autoplay-usage',
          name: 'autoplayDemo',
          noDescription: true,
          component: CarouselDemoAutoPlayComponent,
          source: [
            { title: 'HTML', language: 'html', code: autoplayHtml },
            { title: 'TS', language: 'typescript', code: autoplayTs },
          ],
        },
        {
          anchor: 'custom-usage',
          name: 'customDemo',
          noDescription: true,
          component: CarouselDemoCustomComponent,
          source: [
            { title: 'HTML', language: 'html', code: customHtml },
            { title: 'TS', language: 'typescript', code: customTs },
            { title: 'SCSS', language: 'css', code: demoCommonScss },
          ],
        },
        {
          anchor: 'with-transition-progress-usage',
          name: 'withTransitionProgressDemo',
          noDescription: true,
          component: WithTransitionProgressComponent,
          source: [
            { title: 'HTML', language: 'xml', code: withTransitionProgressHtml },
            { title: 'TS', language: 'typescript', code: withTransitionProgressTs },
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
