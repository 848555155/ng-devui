import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { LoadingDesignComponent } from './loading-design.component';
import { BasicComponent } from './basic/basic.component';
import { CustomComponent } from './custom/custom.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { PromiseComponent } from './promise/promise.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ShowLoadingComponent } from './show-loading/show-loading.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: LoadingDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'loading',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          componnt: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'custom-style',
          name: 'customDemo',
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom/custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./custom/custom.component.scss?raw') },
          ],
        },
        {
          anchor: 'multi-promise',
          name: 'promiseDemo',
          component: PromiseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./promise/promise.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./promise/promise.component.ts?raw') },
          ],
        },
        {
          anchor: 'use-subscription-mode',
          name: 'subscriptionDemo',
          component: SubscriptionComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./subscription/subscription.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./subscription/subscription.component.ts?raw') },
          ],
        },
        {
          anchor: 'show-loading',
          name: 'showLoadingDemo',
          component: ShowLoadingComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./show-loading/show-loading.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./show-loading/show-loading.component.ts?raw') },
            { title: 'SCSS', language: 'typescript', code: require('./show-loading/show-loading.component.scss?raw') },
          ],
        },
        {
          anchor: 'full-screen',
          name: 'fullScreenDemo',
          component: FullScreenComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./full-screen/full-screen.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./full-screen/full-screen.component.ts?raw') },
            { title: 'SCSS', language: 'typescript', code: require('./full-screen/full-screen.component.scss?raw') },
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
