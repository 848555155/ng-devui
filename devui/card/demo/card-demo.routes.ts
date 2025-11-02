import { Routes } from '@angular/router';
import { CardDesignComponent } from './card-design.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { CardInteractiveComponent } from './card-interactive/card-interactive.component';
import { WithMediaComponent } from './with-media/with-media.component';
import { CustomComponent } from './custom/custom.component';

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
      demos: [
        {
          anchor: 'card-basic',
          title: 'components.card.basicDemo.title',
          noDescription: true,
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'card-interactive-usage',
          title: 'components.card.cardInteractiveDemo.title',
          noDescription: true,
          component: CardInteractiveComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./card-interactive/card-interactive.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./card-interactive/card-interactive.component.ts?raw') },
            { title: 'SCSS', language: 'scss', code: require('./card-interactive/card-interactive.component.scss?raw') },
          ],
        },
        {
          anchor: 'card-with-media',
          title: 'components.card.mediaDemo.title',
          description: 'components.card.mediaDemo.description',
          component: WithMediaComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./with-media/with-media.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./with-media/with-media.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./with-media/with-media.component.scss?raw') },
          ],
        },
        {
          anchor: 'card-custom',
          title: 'components.card.customDemo.title',
          noDescription: true,
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom/custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./custom/custom.component.scss?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'card-basic', value: 'components.card.anchorLinkValues.card-basic' },
        { dAnchorLink: 'card-interactive-usage', value: 'components.card.anchorLinkValues.card-interactive-usage' },
        { dAnchorLink: 'card-with-media', value: 'components.card.anchorLinkValues.card-with-media' },
        { dAnchorLink: 'card-custom', value: 'components.card.anchorLinkValues.card-custom' },
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
