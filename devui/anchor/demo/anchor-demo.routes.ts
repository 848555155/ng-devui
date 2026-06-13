import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AnchorDesignComponent } from './anchor-design.component';
import { BasicComponent } from './basic/basic.component';
import { AsyncComponent } from './async/async.component';
import { HashComponent } from './hash/hash.component';
import { ScrollTargetComponent } from './scroll-target/scroll-target.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import asyncHtml from './async/async.component.html?raw';
import asyncTs from './async/async.component.ts.txt?raw';
import asyncScss from './async/async.component.scss?raw';
import scrollTargetHtml from './scroll-target/scroll-target.component.html?raw';
import scrollTargetTs from './scroll-target/scroll-target.component.ts.txt?raw';
import scrollTargetScss from './scroll-target/scroll-target.component.scss?raw';
import hashHtml from './hash/hash.component.html?raw';
import hashTs from './hash/hash.component.ts.txt?raw';
import hashScss from './hash/hash.component.scss?raw';

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
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'asynchronous-loading',
          name: 'asyncDemo',
          component: AsyncComponent,
          source: [
            { title: 'HTML', language: 'xml', code: asyncHtml },
            { title: 'TS', language: 'typescript', code: asyncTs },
            { title: 'SCSS', language: 'css', code: asyncScss },
          ],
        },
        {
          anchor: 'scroll-target',
          name: 'scrollTargetDemo',
          component: ScrollTargetComponent,
          source: [
            { title: 'HTML', language: 'xml', code: scrollTargetHtml },
            { title: 'TS', language: 'typescript', code: scrollTargetTs },
            { title: 'SCSS', language: 'css', code: scrollTargetScss },
          ],
        },
        {
          anchor: 'support-hash',
          name: 'hashDemo',
          component: HashComponent,
          source: [
            { title: 'HTML', language: 'xml', code: hashHtml },
            { title: 'TS', language: 'typescript', code: hashTs },
            { title: 'SCSS', language: 'css', code: hashScss },
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
