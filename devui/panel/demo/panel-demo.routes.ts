import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { PanelDesignComponent } from './panel-design.component';
import { BasicComponent } from './basic/basic.component';
import { ConditionChangeComponent } from './condition-change/condition-change.component';
import { TypeComponent } from './type/type.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicScss from './basic/basic.component.scss?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import typeHtml from './type/type.component.html?raw';
import typeTs from './type/type.component.ts.txt?raw';
import conditionChangeHtml from './condition-change/condition-change.component.html?raw';
import conditionChangeScss from './condition-change/condition-change.component.scss?raw';
import conditionChangeTs from './condition-change/condition-change.component.ts.txt?raw';

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
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'SCSS', language: 'css', code: basicScss },
            { title: 'TS', language: 'typescript', code: basicTs },
          ],
        },
        {
          anchor: 'multiple-types',
          name: 'typeDemo',
          component: TypeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: typeHtml },
            { title: 'TS', language: 'typescript', code: typeTs },
          ],
        },
        {
          anchor: 'condition-change',
          name: 'conditionChangeDemo',
          component: ConditionChangeComponent,
          source: [
            { title: 'HTML', language: 'xml', code: conditionChangeHtml },
            { title: 'SCSS', language: 'css', code: conditionChangeScss },
            { title: 'TS', language: 'typescript', code: conditionChangeTs },
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
