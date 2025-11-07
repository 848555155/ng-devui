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
      categoryName: 'common',
      demos: [
        {
          anchor: 'date-pipe',
          name:  'pipeDemo.dDatePipe',
          noDescription: true,
          component: DatePipeDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./pipe/date-pipe/date-pipe.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./pipe/date-pipe/date-pipe.component.ts?raw') },
          ],
        },
        {
          anchor: 'safe-null-pipe',
          name:  'pipeDemo.dSafeNullPipe',
          component: SafeNullPipeComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./pipe/safe-null-pipe/safe-null-pipe.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./pipe/safe-null-pipe/safe-null-pipe.component.ts?raw') },
          ],
        },
        {
          anchor: 'browser-version',
          name:  'browserDemo',
          noDescription: true,
          component: HelperBrowserComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-browser/helper-browser.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-browser/helper-browser.component.ts?raw') },
          ],
        },
        {
          anchor: 'open-url',
          name:  'openURLDemo',
          noDescription: true,
          component: HelperJumpDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-jump/helper-jump.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-jump/helper-jump.component.ts?raw') },
          ],
        },
        {
          anchor: 'download-file',
          name:  'helperDownloadDemo',
          noDescription: true,
          component: HelperDownloadDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./helper-download/helper-download.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./helper-download/helper-download.component.ts?raw') },
          ],
        },
        {
          anchor: 'iframe-propagate',
          name:  'iframePropagateDemo',
          component: IframPropagateDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./iframe-propagate/iframe-propagate.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./iframe-propagate/iframe-propagate.component.ts?raw') },
          ],
        },
        {
          anchor: 'clipboard',
          name:  'clipboardDemo',
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
          name:  'shapeIconHoverableDemo',
          noDescription: true,
          component: ShapeIconHoverableDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./shapeIconHoverable/shapeIconHoverable.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./shapeIconHoverable/shapeIconHoverable.component.ts?raw') },
          ],
        },
        {
          anchor: 'lazy-load',
          name:  'lazyLoadDemo',
          component: LazyLoadComponent,
          source: [
            { title: 'HTML', language: 'html', code: require('./lazy-load/lazy-load.component.html?raw') },
            { title: 'TS', language: 'typescript', code: require('./lazy-load/lazy-load.component.ts?raw') },
            { title: 'SCSS', language: 'css', code: require('./lazy-load/lazy-load.component.scss?raw') },
          ],
        },
      ]
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
