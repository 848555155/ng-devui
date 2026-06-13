import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-select-design',
  standalone: false,
  templateUrl: './select-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SelectDesignComponent implements OnInit {
  designObj;
  subs: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.subs.add(
      this.translate.get('components.select.design').subscribe((res) => {
        this.designObj = res;
      })
    );
  }
  getImgSrc(src) {
    return environment.deployPrefix + src;
  }
}
