import { Routes } from '@angular/router';
import { CommonDesignComponent } from './common-design.component';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevuiDemoComponent } from 'ng-devui/shared/devui-demo/devui-demo.component';
import { DatePipeDemoComponent } from './pipe/date-pipe/date-pipe.component';
import { SafeNullPipeComponent } from './pipe/safe-null-pipe/safe-null-pipe.component';
import { HelperBrowserComponent } from './helper-browser/helper-browser.component';
import { HelperJumpDemoComponent } from './helper-jump/helper-jump.component';
import { HelperDownloadDemoComponent } from './helper-download/helper-download.component';
import { IframPropagateDemoComponent } from './iframe-propagate/iframe-propagate.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { ClipboardDemoComponent } from './clipboard/clipboard.component';
import { ShapeIconHoverableDemoComponent } from './shapeIconHoverable/shapeIconHoverable.component';

export default [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'design',
    component: CommonDesignComponent,
  },
  {
    path: 'demo',
    component: DevuiDemoComponent,
    data: {
      demos: [
        {
          anchor: 'date-pipe',
          title: 'components.common.pipeDemo.dDatePipe.title',
          noDescription: true,
          component: DatePipeDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./pipe/date-pipe/date-pipe.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./pipe/date-pipe/date-pipe.component.ts?raw') },
          ],
        },
        {
          anchor: 'safe-null-pipe',
          title: 'components.common.pipeDemo.dSafeNullPipe.title',
          description: 'components.common.pipeDemo.dSafeNullPipe.description',
          component: SafeNullPipeComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./pipe/safe-null-pipe/safe-null-pipe.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./pipe/safe-null-pipe/safe-null-pipe.component.ts?raw') },
          ],
        },
        {
          anchor: 'browser-version',
          title: 'components.common.browserDemo.title',
          noDescription: true,
          component: HelperBrowserComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-browser/helper-browser.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-browser/helper-browser.component.ts?raw') },
          ],
        },
        {
          anchor: 'open-url',
          title: 'components.common.openURLDemo.title',
          noDescription: true,
          component: HelperJumpDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-jump/helper-jump.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-jump/helper-jump.component.ts?raw') },
          ],
        },
        {
          anchor: 'download-file',
          title: 'components.common.helperDownloadDemo.title',
          noDescription: true,
          component: HelperDownloadDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-download/helper-download.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-download/helper-download.component.ts?raw') },
          ],
        },
        {
          anchor: 'iframe-propagate',
          title: 'components.common.iframePropagateDemo.title',
          description: 'components.common.iframePropagateDemo.description',
          component: IframPropagateDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./iframe-propagate/iframe-propagate.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./iframe-propagate/iframe-propagate.component.ts?raw') },
          ],
        },
        {
          anchor: 'clipboard',
          title: 'components.common.clipboardDemo.title',
          noDescription: true,
          component: ClipboardDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./clipboard/clipboard.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./clipboard/clipboard.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./clipboard/clipboard.component.scss?raw') },
          ],
        },
        {
          anchor: 'shapeIconHoverable',
          title: 'components.common.shapeIconHoverableDemo.title',
          noDescription: true,
          component: ShapeIconHoverableDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./shapeIconHoverable/shapeIconHoverable.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./shapeIconHoverable/shapeIconHoverable.component.ts?raw') },
          ],
        },
        {
          anchor: 'lazy-load',
          title: 'components.common.lazyLoadDemo.title',
          description: 'components.common.lazyLoadDemo.description',
          component: LazyLoadComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./lazy-load/lazy-load.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./lazy-load/lazy-load.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./lazy-load/lazy-load.component.scss?raw') },
          ],
        },
      ],
      navItems: [
        { dAnchorLink: 'date-pipe', value: 'components.common.anchorLinkValues.date-pipe' },
        { dAnchorLink: 'safe-null-pipe', value: 'components.common.anchorLinkValues.safe-null-pipe' },
        { dAnchorLink: 'browser-version', value: 'components.common.anchorLinkValues.browser-version' },
        { dAnchorLink: 'open-url', value: 'components.common.anchorLinkValues.open-url' },
        { dAnchorLink: 'download-file', value: 'components.common.anchorLinkValues.download-file' },
        { dAnchorLink: 'iframe-propagate', value: 'components.common.anchorLinkValues.iframe-propagate' },
        { dAnchorLink: 'clipboard', value: 'components.common.anchorLinkValues.clipboard' },
        { dAnchorLink: 'shapeIconHoverable', value: 'components.common.anchorLinkValues.shapeIconHoverable' },
        { dAnchorLink: 'lazy-load', value: 'components.common.anchorLinkValues.lazy-load' },
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
