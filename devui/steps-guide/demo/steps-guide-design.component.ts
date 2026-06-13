import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-steps-guide-design',
  standalone: false,
  templateUrl: './steps-guide-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class StepsGuideDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
