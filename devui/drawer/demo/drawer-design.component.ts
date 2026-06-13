import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-drawer-design',
  standalone: false,
  templateUrl: './drawer-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DrawerDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
