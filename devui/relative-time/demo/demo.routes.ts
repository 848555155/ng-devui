import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { RelativeTimeDesignComponent } from './relative-time-design.component';
import { BasicComponent } from './basic/basic.component';
import { CustomTimeComponent } from './custom-time/custom-time.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: RelativeTimeDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'relative-time',
      demos: [
        {
          noAnchor: true,
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
          ],
        },
        {
          noAnchor: true,
          name: 'customDemo',
          component: CustomTimeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom-time/custom-time.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom-time/custom-time.component.ts?raw') },
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
