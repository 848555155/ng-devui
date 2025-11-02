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
      demos: [
        {
          anchor: 'badge-basic',
          title: 'components.badge.basicDemo.title',
          description: 'components.badge.basicDemo.description',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-count',
          title: 'components.badge.countDemo.title',
          description: 'components.badge.countDemo.description',
          component: CountComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./count/count.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./count/count.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./count/count.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-dot',
          title: 'components.badge.dotDemo.title',
          description: 'components.badge.dotDemo.description',
          component: DotComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./dot/dot.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./dot/dot.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./dot/dot.component.scss?raw') },
          ],
        },
        {
          anchor: 'badge-status',
          title: 'components.badge.statusDemo.title',
          description: 'components.badge.statusDemo.description',
          component: StatusComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./status/status.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./status/status.component.ts?raw') },
          ],
        },
        {
          anchor: 'position',
          title: 'components.badge.positionDemo.title',
          description: 'components.badge.positionDemo.description',
          component: PositionComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./position/position.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./position/position.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./position/position.component.scss?raw') },
          ],
        },
        {
          anchor: 'custom',
          title: 'components.badge.customDemo.title',
          description: 'components.badge.customDemo.description',
          component: CustomComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./custom/custom.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./custom/custom.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./custom/custom.component.scss?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'badge-basic', value: 'components.badge.anchorLinkValues.badge-basic' },
        { dAnchorLink: 'badge-count', value: 'components.badge.anchorLinkValues.badge-count' },
        { dAnchorLink: 'badge-dot', value: 'components.badge.anchorLinkValues.badge-dot' },
        { dAnchorLink: 'badge-status', value: 'components.badge.anchorLinkValues.badge-status' },
        { dAnchorLink: 'position', value: 'components.badge.anchorLinkValues.position' },
        { dAnchorLink: 'custom', value: 'components.badge.anchorLinkValues.custom' },
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
