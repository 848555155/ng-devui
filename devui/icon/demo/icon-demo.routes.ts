import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { IconDesignComponent } from './icon-design.component';
import { BasicComponent } from './basic/basic.component';
import { IconGroupDemoComponent } from './icon-group/icon-group.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: IconDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'icon',
      demos: [
        {
          anchor: 'basic',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'CSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'icon-group',
          name: 'iconGroupDemo',
          component: IconGroupDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./icon-group/icon-group.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./icon-group/icon-group.component.ts?raw') },
            { title: 'CSS', language: 'css', code: require('./icon-group/icon-group.component.scss?raw') },
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
