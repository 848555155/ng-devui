import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { map, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng-devui/alert';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox/devui-codebox.module';
import { TranslateModule } from '@ngx-translate/core';
import { DDemoNavModule } from 'devui-commons/src/demo-nav/d-demo-nav.module';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DevuiDemosData } from 'ng-devui/shared/devui-codebox';

@Component({
  selector: 'd-alert-demo',
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AlertModule,
    DevUICodeboxModule,
    DevUIApiModule,
    DDemoNavModule,
  ],
  templateUrl: './alert-demo.component.html',
})
export class AlertDemoComponent implements OnInit, OnDestroy {
  navItems = [];
  subs: Subscription = new Subscription();

  private translate = inject(TranslateService);
  demos = toSignal(inject(ActivatedRoute).data.pipe(map(data => data.demos as DevuiDemosData)));

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.alert.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.alert.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'tips-to-close', value: values['tips-to-close'] },
      { dAnchorLink: 'without-icon', value: values['without-icon'] },
      { dAnchorLink: 'carousel', value: values.carousel },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
