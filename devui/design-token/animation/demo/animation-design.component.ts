import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-animation-design',
  standalone: false,
  templateUrl: './animation-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AnimationDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
