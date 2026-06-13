import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CountComponent } from './count/count.component';
import { DotComponent } from './dot/dot.component';
import { StatusComponent } from './status/status.component';
import { PositionComponent } from './position/position.component';
import { CustomComponent } from './custom/custom.component';
import { BadgeDesignComponent } from './badge-design.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import countHtml from './count/count.component.html?raw';
import countTs from './count/count.component.ts.txt?raw';
import countScss from './count/count.component.scss?raw';
import dotHtml from './dot/dot.component.html?raw';
import dotTs from './dot/dot.component.ts.txt?raw';
import dotScss from './dot/dot.component.scss?raw';
import statusHtml from './status/status.component.html?raw';
import statusTs from './status/status.component.ts.txt?raw';
import positionHtml from './position/position.component.html?raw';
import positionTs from './position/position.component.ts.txt?raw';
import positionScss from './position/position.component.scss?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: BadgeDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'badge',
      demos: [
        {
          anchor: 'badge-basic',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'badge-count',
          name: 'countDemo',
          component: CountComponent,
          source: [
            { title: 'HTML', language: 'xml', code: countHtml },
            { title: 'TS', language: 'typescript', code: countTs },
            { title: 'SCSS', language: 'css', code: countScss },
          ],
        },
        {
          anchor: 'badge-dot',
          name: 'dotDemo',
          component: DotComponent,
          source: [
            { title: 'HTML', language: 'xml', code: dotHtml },
            { title: 'TS', language: 'typescript', code: dotTs },
            { title: 'SCSS', language: 'css', code: dotScss },
          ],
        },
        {
          anchor: 'badge-status',
          name: 'statusDemo',
          component: StatusComponent,
          source: [
            { title: 'HTML', language: 'xml', code: statusHtml },
            { title: 'TS', language: 'typescript', code: statusTs },
          ],
        },
        {
          anchor: 'position',
          name: 'positionDemo',
          component: PositionComponent,
          source: [
            { title: 'HTML', language: 'xml', code: positionHtml },
            { title: 'TS', language: 'typescript', code: positionTs },
            { title: 'SCSS', language: 'css', code: positionScss },
          ],
        },
        {
          anchor: 'custom',
          name: 'customDemo',
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: customHtml },
            { title: 'TS', language: 'typescript', code: customTs },
            { title: 'SCSS', language: 'css', code: customScss },
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
