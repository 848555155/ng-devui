import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-dashboard-design',
  standalone: false,
  templateUrl: './dashboard-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DashboardDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
