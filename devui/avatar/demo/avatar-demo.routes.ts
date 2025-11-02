import { Routes } from '@angular/router';
import { AvatarDesignComponent } from './avatar-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { BasicComponent } from './basic/basic.component';
import { ConfigComponent } from './config/config.component';
import { SpecialComponent } from './special/special.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AvatarDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      demos: [
        {
          anchor: 'basic-rules',
          title: 'components.avatar.basicDemo.title',
          description: 'components.avatar.basicDemo.description',
          component: BasicComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./basic/basic.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./basic/basic.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./basic/basic.component.css?raw') },
          ],
        },
        {
          anchor: 'basic-configuration',
          title: 'components.avatar.configDemo.title',
          description: 'components.avatar.configDemo.description',
          component: ConfigComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./special/special.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./special/special.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./special/special.component.css?raw') },
          ],
        },
        {
          anchor: 'special-display',
          title: 'components.avatar.specialDemo.title',
          description: 'components.avatar.specialDemo.description',
          component: SpecialComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./config/config.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./config/config.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./config/config.component.css?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'basic-rules', value: 'components.avatar.anchorLinkValues.basic-rules' },
        { dAnchorLink: 'basic-configuration', value: 'components.avatar.anchorLinkValues.basic-configuration' },
        { dAnchorLink: 'special-display', value: 'components.avatar.anchorLinkValues.special-display' },
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
