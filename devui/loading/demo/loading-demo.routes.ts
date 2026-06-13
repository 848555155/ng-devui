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
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';
import promiseHtml from './promise/promise.component.html?raw';
import promiseTs from './promise/promise.component.ts.txt?raw';
import subscriptionHtml from './subscription/subscription.component.html?raw';
import subscriptionTs from './subscription/subscription.component.ts.txt?raw';
import showLoadingHtml from './show-loading/show-loading.component.html?raw';
import showLoadingTs from './show-loading/show-loading.component.ts.txt?raw';
import showLoadingScss from './show-loading/show-loading.component.scss?raw';
import fullScreenHtml from './full-screen/full-screen.component.html?raw';
import fullScreenTs from './full-screen/full-screen.component.ts.txt?raw';
import fullScreenScss from './full-screen/full-screen.component.scss?raw';

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
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'custom-style',
          name: 'customDemo',
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: customHtml },
            { title: 'TS', language: 'typescript', code: customTs },
            { title: 'SCSS', language: 'css', code: customScss },
          ],
        },
        {
          anchor: 'multi-promise',
          name: 'promiseDemo',
          component: PromiseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: promiseHtml },
            { title: 'TS', language: 'typescript', code: promiseTs },
          ],
        },
        {
          anchor: 'use-subscription-mode',
          name: 'subscriptionDemo',
          component: SubscriptionComponent,
          source: [
            { title: 'HTML', language: 'xml', code: subscriptionHtml },
            { title: 'TS', language: 'typescript', code: subscriptionTs },
          ],
        },
        {
          anchor: 'show-loading',
          name: 'showLoadingDemo',
          component: ShowLoadingComponent,
          source: [
            { title: 'HTML', language: 'xml', code: showLoadingHtml },
            { title: 'TS', language: 'typescript', code: showLoadingTs },
            { title: 'SCSS', language: 'typescript', code: showLoadingScss },
          ],
        },
        {
          anchor: 'full-screen',
          name: 'fullScreenDemo',
          component: FullScreenComponent,
          source: [
            { title: 'HTML', language: 'xml', code: fullScreenHtml },
            { title: 'TS', language: 'typescript', code: fullScreenTs },
            { title: 'SCSS', language: 'typescript', code: fullScreenScss },
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
