import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';

import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AnimationsDesignComponent } from './animations-design.component';
import { AnimationIconComponent } from './animation-icon/animation-icon.component';
import { FlyInOutComponent } from './fly-in-out/fly-in-out.component';
import { WipeInOutComponent } from './wipe-in-out/wipe-in-out.component';
import { FadeInOutComponent } from './fade-in-out/fade-in-out.component';
import { CollapseComponent } from './collapse/collapse.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: AnimationsDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      categoryName: 'animations',
      demos: [
        {
          anchor: 'expand-collapse',
          name: 'collapsedDemo',
          component: CollapseComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./collapse/collapse.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./collapse/collapse.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./collapse/collapse.component.scss?raw') },
          ],
        },
        {
          anchor: 'fade-in-out',
          name: 'fadeInOutDemo',
          component: FadeInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./fade-in-out/fade-in-out.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./fade-in-out/fade-in-out.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./fade-in-out/fade-in-out.component.scss?raw') },
          ],
        },
        {
          anchor: 'wipe-in-out',
          name: 'wipeInOutDemo',
          component: WipeInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./wipe-in-out/wipe-in-out.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./wipe-in-out/wipe-in-out.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./wipe-in-out/wipe-in-out.component.scss?raw') },
          ],
        },
        {
          anchor: 'fly-in-out',
          name: 'flyInOutDemo',
          component: FlyInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: require('./fly-in-out/fly-in-out.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./fly-in-out/fly-in-out.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./fly-in-out/fly-in-out.component.scss?raw') },
          ],
        },
        {
          anchor: 'icon-class',
          name: 'animationIconDemo',
          component: AnimationIconComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./animation-icon/animation-icon.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./animation-icon/animation-icon.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./animation-icon/animation-icon.component.scss?raw') },
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
