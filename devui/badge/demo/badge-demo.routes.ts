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
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-count',
          name: 'countDemo',
          component: CountComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./count/count.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./count/count.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./count/count.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-dot',
          name: 'dotDemo',
          component: DotComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./dot/dot.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./dot/dot.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./dot/dot.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-status',
          name: 'statusDemo',
          component: StatusComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./status/status.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./status/status.component.ts?raw') },
          ],
        },
        {
          anchor: 'position',
          name: 'positionDemo',
          component: PositionComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./position/position.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./position/position.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./position/position.component.scss?raw') },
          ],
        },
        {
          anchor: 'custom',
          name: 'customDemo',
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom/custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./custom/custom.component.scss?raw') },
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
