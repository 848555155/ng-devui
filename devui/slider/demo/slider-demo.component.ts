import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import basicHtml from './basic/slider-basic.component.html?raw';
import basicTs from './basic/slider-basic.component.ts.txt?raw';
import basicScss from './basic/slider-basic.component.scss?raw';
import disabledHtml from './disabled/slider-disabled.component.html?raw';
import disabledTs from './disabled/slider-disabled.component.ts.txt?raw';
import disabledScss from './disabled/slider-disabled.component.scss?raw';
import customFormatterHtml from './custom-formatter/slider-custom-formatter.component.html?raw';
import customFormatterTs from './custom-formatter/slider-custom-formatter.component.ts.txt?raw';
import customFormatterScss from './custom-formatter/slider-custom-formatter.component.scss?raw';

@Component({
  selector: 'd-slider-demo',
  templateUrl: './slider-demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SliderDemoComponent implements OnInit, OnDestroy {
  SliderBasicComponent = [
    { title: 'HTML', language: 'html', code: basicHtml },
    { title: 'TS', language: 'typescript', code: basicTs },
    { title: 'SCSS', language: 'css', code: basicScss },
  ];
  SliderDisabledComponent = [
    { title: 'HTML', language: 'html', code: disabledHtml },
    { title: 'TS', language: 'typescript', code: disabledTs },
    { title: 'SCSS', language: 'css', code: disabledScss },
  ];
  SliderCustomFormatterComponent = [
    { title: 'HTML', language: 'html', code: customFormatterHtml },
    { title: 'TS', language: 'typescript', code: customFormatterTs },
    { title: 'SCSS', language: 'css', code: customFormatterScss },
  ];
  list = ['基本用法', '禁止输入态', '定制Popover的显示内容'];

  navItems = [];
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subs.add(
      this.translate.get('components.slider.anchorLinkValues').subscribe((res) => {
        this.setNavValues(res);
      })
    );

    this.subs.add(
      this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('components.slider.anchorLinkValues');
        this.setNavValues(values);
      })
    );
  }

  setNavValues(values) {
    this.navItems = [
      { dAnchorLink: 'basic-usage', value: values['basic-usage'] },
      { dAnchorLink: 'slider-disabled', value: values['slider-disabled'] },
      { dAnchorLink: 'slider-custom', value: values['slider-custom'] },
    ];
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
