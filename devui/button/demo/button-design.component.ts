import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-button-design',
  imports: [TranslatePipe],
  templateUrl: './button-design.component.html',
  styleUrl: './button-design.component.scss',
})
export class ButtonDesignComponent {
  private translate = inject(TranslateService);

  structureImgSrc = '';
  useImgSrc = '';
  sizeList: any[] = [];
  buttonList: any[] = [];
  layoutList: any[] = [];
  primaryLeft: any[] = [];
  primaryRight: any[] = [];
  structureList: any[] = [];

  constructor() {
    this.structureImgSrc = environment.deployPrefix + 'assets/design/button/structure.png';
    this.useImgSrc = environment.deployPrefix + 'assets/design/button/use.png';

    merge(
      this.translate.get('components.button.design'),
      this.translate.onLangChange
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const values = this.translate.instant('components.button.design');
        this.setNavValues(values);
      });
  }

  setNavValues(values) {
    this.sizeList = values['how-to-use']['size-list'];
    this.buttonList = values['button-list'];
    this.layoutList = values.layout.layoutStrategies;
    this.primaryLeft = values.layout.primaryLeft;
    this.primaryRight = values.layout.primaryRight;
    this.structureList = values.structure.descList;
  }

  getImgSrc(src) {
    return environment.deployPrefix + src;
  }
}
