import { Routes } from '@angular/router';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';

import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { AnimationsDesignComponent } from './animations-design.component';
import { AnimationIconComponent } from './animation-icon/animation-icon.component';
import { FlyInOutComponent } from './fly-in-out/fly-in-out.component';
import { WipeInOutComponent } from './wipe-in-out/wipe-in-out.component';
import { FadeInOutComponent } from './fade-in-out/fade-in-out.component';
import { CollapseComponent } from './collapse/collapse.component';
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import collapseHtml from './collapse/collapse.component.html?raw';
import collapseTs from './collapse/collapse.component.ts.txt?raw';
import collapseScss from './collapse/collapse.component.scss?raw';
import fadeInOutHtml from './fade-in-out/fade-in-out.component.html?raw';
import fadeInOutTs from './fade-in-out/fade-in-out.component.ts.txt?raw';
import fadeInOutScss from './fade-in-out/fade-in-out.component.scss?raw';
import wipeInOutHtml from './wipe-in-out/wipe-in-out.component.html?raw';
import wipeInOutTs from './wipe-in-out/wipe-in-out.component.ts.txt?raw';
import wipeInOutScss from './wipe-in-out/wipe-in-out.component.scss?raw';
import flyInOutHtml from './fly-in-out/fly-in-out.component.html?raw';
import flyInOutTs from './fly-in-out/fly-in-out.component.ts.txt?raw';
import flyInOutScss from './fly-in-out/fly-in-out.component.scss?raw';
import animationIconHtml from './animation-icon/animation-icon.component.html?raw';
import animationIconTs from './animation-icon/animation-icon.component.ts.txt?raw';
import animationIconScss from './animation-icon/animation-icon.component.scss?raw';

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
            { title: 'HTML', language: 'xml', code: collapseHtml },
            { title: 'TS', language: 'typescript', code: collapseTs },
            { title: 'SCSS', language: 'css', code: collapseScss },
          ],
        },
        {
          anchor: 'fade-in-out',
          name: 'fadeInOutDemo',
          component: FadeInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: fadeInOutHtml },
            { title: 'TS', language: 'typescript', code: fadeInOutTs },
            { title: 'SCSS', language: 'css', code: fadeInOutScss },
          ],
        },
        {
          anchor: 'wipe-in-out',
          name: 'wipeInOutDemo',
          component: WipeInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: wipeInOutHtml },
            { title: 'TS', language: 'typescript', code: wipeInOutTs },
            { title: 'SCSS', language: 'css', code: wipeInOutScss },
          ],
        },
        {
          anchor: 'fly-in-out',
          name: 'flyInOutDemo',
          component: FlyInOutComponent,
          source: [
            { title: 'HTML', language: 'xml', code: flyInOutHtml },
            { title: 'TS', language: 'typescript', code: flyInOutTs },
            { title: 'SCSS', language: 'css', code: flyInOutScss },
          ],
        },
        {
          anchor: 'icon-class',
          name: 'animationIconDemo',
          component: AnimationIconComponent,
          source: [
            { title: 'HTML', language: 'html', code: animationIconHtml },
            { title: 'TS', language: 'typescript', code: animationIconTs },
            { title: 'SCSS', language: 'css', code: animationIconScss },
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
