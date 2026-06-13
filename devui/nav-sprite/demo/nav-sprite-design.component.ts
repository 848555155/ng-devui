import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-nav-sprite-design',
  standalone: false,
  templateUrl: './nav-sprite-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class NavSpriteDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
