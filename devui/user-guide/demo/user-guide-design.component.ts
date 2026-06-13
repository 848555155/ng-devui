import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-user-guide-design',
  standalone: false,
  templateUrl: './user-guide-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class UserGuideDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
