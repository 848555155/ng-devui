import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { PanelDesignComponent } from './panel-design.component';
import { BasicComponent } from './basic/basic.component';
import { ConditionChangeComponent } from './condition-change/condition-change.component';
import { TypeComponent } from './type/type.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: PanelDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'panel',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
          ],
        },
        {
          anchor: 'multiple-types',
          name: 'typeDemo',
          component: TypeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./type/type.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./type/type.component.ts?raw') },
          ],
        },
        {
          anchor: 'condition-change',
          name: 'conditionChangeDemo',
          component: ConditionChangeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./condition-change/condition-change.component.html?raw') },
            { title: 'SCSS', language: 'css', code: require('./condition-change/condition-change.component.scss?raw') },
            { title: 'TS', language: 'typescript', code: require('./condition-change/condition-change.component.ts?raw') },
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
