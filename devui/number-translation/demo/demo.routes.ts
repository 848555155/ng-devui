import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { NumberTranslatorDesignComponent } from './number-translator-design.component';
import { BasicComponent } from './basic/basic.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: NumberTranslatorDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'number-trans',
      demos: [
        {
          noAnchor: true,
          name: 'basicDemo',
          noDescription: true,
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
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
