import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-datepicker-pro-design',
  standalone: false,
  templateUrl: './datepicker-pro-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DatepickerProDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
