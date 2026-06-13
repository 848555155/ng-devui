import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-border-radius-design',
  standalone: false,
  templateUrl: './border-radius-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BorderRadiusDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
