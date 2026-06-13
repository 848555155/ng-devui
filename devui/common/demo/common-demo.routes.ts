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
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
import datePipeHtml from './pipe/date-pipe/date-pipe.component.html?raw';
import datePipeTs from './pipe/date-pipe/date-pipe.component.ts.txt?raw';
import safeNullPipeHtml from './pipe/safe-null-pipe/safe-null-pipe.component.html?raw';
import safeNullPipeTs from './pipe/safe-null-pipe/safe-null-pipe.component.ts.txt?raw';
import helperBrowserHtml from './helper-browser/helper-browser.component.html?raw';
import helperBrowserTs from './helper-browser/helper-browser.component.ts.txt?raw';
import helperJumpHtml from './helper-jump/helper-jump.component.html?raw';
import helperJumpTs from './helper-jump/helper-jump.component.ts.txt?raw';
import helperDownloadHtml from './helper-download/helper-download.component.html?raw';
import helperDownloadTs from './helper-download/helper-download.component.ts.txt?raw';
import iframePropagateHtml from './iframe-propagate/iframe-propagate.component.html?raw';
import iframePropagateTs from './iframe-propagate/iframe-propagate.component.ts.txt?raw';
import clipboardHtml from './clipboard/clipboard.component.html?raw';
import clipboardTs from './clipboard/clipboard.component.ts.txt?raw';
import clipboardScss from './clipboard/clipboard.component.scss?raw';
import shapeIconHoverableHtml from './shapeIconHoverable/shapeIconHoverable.component.html?raw';
import shapeIconHoverableTs from './shapeIconHoverable/shapeIconHoverable.component.ts.txt?raw';
import lazyLoadHtml from './lazy-load/lazy-load.component.html?raw';
import lazyLoadTs from './lazy-load/lazy-load.component.ts.txt?raw';
import lazyLoadScss from './lazy-load/lazy-load.component.scss?raw';

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
            { title: 'HTML', language: 'html', code: datePipeHtml },
            { title: 'TS', language: 'typescript', code: datePipeTs },
          ],
        },
        {
          anchor: 'safe-null-pipe',
          name:  'pipeDemo.dSafeNullPipe',
          component: SafeNullPipeComponent,
          source: [
            { title: 'HTML', language: 'html', code: safeNullPipeHtml },
            { title: 'TS', language: 'typescript', code: safeNullPipeTs },
          ],
        },
        {
          anchor: 'browser-version',
          name:  'browserDemo',
          noDescription: true,
          component: HelperBrowserComponent,
          source: [
            { title: 'HTML', language: 'html', code: helperBrowserHtml },
            { title: 'TS', language: 'typescript', code: helperBrowserTs },
          ],
        },
        {
          anchor: 'open-url',
          name:  'openURLDemo',
          noDescription: true,
          component: HelperJumpDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: helperJumpHtml },
            { title: 'TS', language: 'typescript', code: helperJumpTs },
          ],
        },
        {
          anchor: 'download-file',
          name:  'helperDownloadDemo',
          noDescription: true,
          component: HelperDownloadDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: helperDownloadHtml },
            { title: 'TS', language: 'typescript', code: helperDownloadTs },
          ],
        },
        {
          anchor: 'iframe-propagate',
          name:  'iframePropagateDemo',
          component: IframPropagateDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: iframePropagateHtml },
            { title: 'TS', language: 'typescript', code: iframePropagateTs },
          ],
        },
        {
          anchor: 'clipboard',
          name:  'clipboardDemo',
          noDescription: true,
          component: ClipboardDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: clipboardHtml },
            { title: 'TS', language: 'typescript', code: clipboardTs },
            { title: 'SCSS', language: 'css', code: clipboardScss },
          ],
        },
        {
          anchor: 'shapeIconHoverable',
          name:  'shapeIconHoverableDemo',
          noDescription: true,
          component: ShapeIconHoverableDemoComponent,
          source: [
            { title: 'HTML', language: 'html', code: shapeIconHoverableHtml },
            { title: 'TS', language: 'typescript', code: shapeIconHoverableTs },
          ],
        },
        {
          anchor: 'lazy-load',
          name:  'lazyLoadDemo',
          component: LazyLoadComponent,
          source: [
            { title: 'HTML', language: 'html', code: lazyLoadHtml },
            { title: 'TS', language: 'typescript', code: lazyLoadTs },
            { title: 'SCSS', language: 'css', code: lazyLoadScss },
          ],
        },
      ]
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
