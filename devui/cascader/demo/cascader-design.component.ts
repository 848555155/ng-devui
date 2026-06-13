import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-cascader-design',
  standalone: false,
  templateUrl: './cascader-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CascaderDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
