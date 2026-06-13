import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-layout-design',
  templateUrl: './layout-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LayoutDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
