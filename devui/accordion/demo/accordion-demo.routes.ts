import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AccordionDesignComponent } from './according-design.component';
import { LinkComponent } from './link/link.component';
import { TemplateComponent } from './template/template.component';
import { MultiLevelComponent } from './multi-level/multi-level.component';
import { ChangeKeyComponent } from './change-key/change-key.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicCss from './basic/basic.component.css?raw';
import linkHtml from './link/link.component.html?raw';
import linkTs from './link/link.component.ts.txt?raw';
import linkCss from './link/link.component.css?raw';
import templateHtml from './template/template.component.html?raw';
import templateTs from './template/template.component.ts.txt?raw';
import templateScss from './template/template.component.scss?raw';
import multiLevelHtml from './multi-level/multi-level.component.html?raw';
import multiLevelTs from './multi-level/multi-level.component.ts.txt?raw';
import multiLevelCss from './multi-level/multi-level.component.css?raw';
import changeKeyHtml from './change-key/change-key.component.html?raw';
import changeKeyTs from './change-key/change-key.component.ts.txt?raw';
import changeKeyCss from './change-key/change-key.component.css?raw';

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
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicCss },
          ],
        },
        {
          anchor: 'use-built-in-routing-and-link-types',
          name: 'linkDemo',
          noDescription: true,
          component: LinkComponent,
          source: [
            { title: 'HTML', language: 'xml', code: linkHtml },
            { title: 'TS', language: 'typescript', code: linkTs },
            { title: 'SCSS', language: 'css', code: linkCss },
          ],
        },
        {
          anchor: 'using-templates',
          name: 'templateDemo',
          component: TemplateComponent,
          source: [
            { title: 'HTML', language: 'xml', code: templateHtml },
            { title: 'TS', language: 'typescript', code: templateTs },
            { title: 'SCSS', language: 'css', code: templateScss },
          ],
        },
        {
          anchor: 'compound-level-and-auto-expand',
          name: 'multiLevelDemo',
          component: MultiLevelComponent,
          source: [
            { title: 'HTML', language: 'xml', code: multiLevelHtml },
            { title: 'TS', language: 'typescript', code: multiLevelTs },
            { title: 'SCSS', language: 'css', code: multiLevelCss },
          ],
        },
        {
          anchor: 'change-values',
          name: 'changeKeyDemo',
          component: ChangeKeyComponent,
          source: [
            { title: 'HTML', language: 'xml', code: changeKeyHtml },
            { title: 'TS', language: 'typescript', code: changeKeyTs },
            { title: 'SCSS', language: 'css', code: changeKeyCss },
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
