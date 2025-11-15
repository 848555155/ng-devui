import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AnchorDesignComponent } from './anchor-design.component';
import { BasicComponent } from './basic/basic.component';
import { AsyncComponent } from './async/async.component';
import { HashComponent } from './hash/hash.component';
import { ScrollTargetComponent } from './scroll-target/scroll-target.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AnchorDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'anchor',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'asynchronous-loading',
          name: 'asyncDemo',
          component: AsyncComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./async/async.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./async/async.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./async/async.component.scss?raw') },
          ],
        },
        {
          anchor: 'scroll-target',
          name: 'scrollTargetDemo',
          component: ScrollTargetComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./scroll-target/scroll-target.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./scroll-target/scroll-target.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./scroll-target/scroll-target.component.scss?raw') },
          ],
        },
        {
          anchor: 'support-hash',
          name: 'hashDemo',
          component: HashComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./hash/hash.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./hash/hash.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./hash/hash.component.scss?raw') },
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
