import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-z-index-design',
  standalone: false,
  templateUrl: './z-index-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ZIndexDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
