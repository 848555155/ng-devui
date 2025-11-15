import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AccordionDesignComponent } from './according-design.component';
import { LinkComponent } from './link/link.component';
import { TemplateComponent } from './template/template.component';
import { MultiLevelComponent } from './multi-level/multi-level.component';
import { ChangeKeyComponent } from './change-key/change-key.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AccordionDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'accordion',
      demos: [
        {
          anchor: 'basic-usage',
          name: 'basicDemo',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.css?raw') },
          ],
        },
        {
          anchor: 'use-built-in-routing-and-link-types',
          name: 'linkDemo',
          noDescription: true,
          component: LinkComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./link/link.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./link/link.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./link/link.component.css?raw') },
          ],
        },
        {
          anchor: 'using-templates',
          name: 'templateDemo',
          component: TemplateComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./template/template.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./template/template.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./template/template.component.scss?raw') },
          ],
        },
        {
          anchor: 'compound-level-and-auto-expand',
          name: 'multiLevelDemo',
          component: MultiLevelComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./multi-level/multi-level.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./multi-level/multi-level.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./multi-level/multi-level.component.css?raw') },
          ],
        },
        {
          anchor: 'change-values',
          name: 'changeKeyDemo',
          component: ChangeKeyComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./change-key/change-key.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./change-key/change-key.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./change-key/change-key.component.css?raw') },
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
