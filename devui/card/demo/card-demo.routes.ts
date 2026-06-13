import { Routes } from '@angular/router';
import { CardDesignComponent } from './card-design.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { CardInteractiveComponent } from './card-interactive/card-interactive.component';
import { WithMediaComponent } from './with-media/with-media.component';
import { CustomComponent } from './custom/custom.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import basicHtml from './basic/basic.component.html?raw';
import basicTs from './basic/basic.component.ts.txt?raw';
import basicScss from './basic/basic.component.scss?raw';
import cardInteractiveHtml from './card-interactive/card-interactive.component.html?raw';
import cardInteractiveTs from './card-interactive/card-interactive.component.ts.txt?raw';
import cardInteractiveScss from './card-interactive/card-interactive.component.scss?raw';
import withMediaHtml from './with-media/with-media.component.html?raw';
import withMediaTs from './with-media/with-media.component.ts.txt?raw';
import withMediaScss from './with-media/with-media.component.scss?raw';
import customHtml from './custom/custom.component.html?raw';
import customTs from './custom/custom.component.ts.txt?raw';
import customScss from './custom/custom.component.scss?raw';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: CardDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'card',
      demos: [
        {
          anchor: 'card-basic',
          name: 'basicDemo',
          noDescription: true,
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: basicHtml },
            { title: 'TS', language: 'typescript', code: basicTs },
            { title: 'SCSS', language: 'css', code: basicScss },
          ],
        },
        {
          anchor: 'card-interactive-usage',
          name: 'cardInteractiveDemo',
          noDescription: true,
          component: CardInteractiveComponent,
          source: [
            { title: 'HTML', language: 'xml', code: cardInteractiveHtml },
            { title: 'TS', language: 'typescript', code: cardInteractiveTs },
            { title: 'SCSS', language: 'scss', code: cardInteractiveScss },
          ],
        },
        {
          anchor: 'card-with-media',
          name: 'mediaDemo',
          component: WithMediaComponent,
          source: [
            { title: 'HTML', language: 'xml', code: withMediaHtml },
            { title: 'TS', language: 'typescript', code: withMediaTs },
            { title: 'SCSS', language: 'css', code: withMediaScss },
          ],
        },
        {
          anchor: 'custom',
          name: 'customDemo',
          noDescription: true,
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
