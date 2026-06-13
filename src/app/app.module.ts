import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DevUIModule } from 'ng-devui';
import { DEVUI_LANG, I18nService, ZH_CN } from 'ng-devui/i18n';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { DevuiCommonsModule } from '../../devui-commons/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevUIModule.forRoot(),
    FormsModule,
    DevuiCommonsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'components/zh-cn',
          pathMatch: 'full',
        },
        {
          path: 'components/:lang',
          loadChildren: () => import('./component/app-content.module').then((m) => m.AppContentModule),
        },
        {
          path: '**',
          redirectTo: 'components/zh-cn',
        },
      ],
      {}
    )
  ],
  declarations: [AppComponent],
  providers: [
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    provideTranslateService({
      loader:
        provideTranslateHttpLoader({ prefix: `${environment.deployPrefix}assets/i18n/`, suffix: '.json' })
    }
    ),
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: DEVUI_LANG,
      useValue: ZH_CN,
    },
    I18nService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
