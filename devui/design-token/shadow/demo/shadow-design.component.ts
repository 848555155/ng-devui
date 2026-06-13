import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-shadow-design',
  standalone: false,
  templateUrl: './shadow-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ShadowDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
