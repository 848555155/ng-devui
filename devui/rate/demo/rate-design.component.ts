import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-rate-design',
  standalone: false,
  templateUrl: './rate-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RateDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
