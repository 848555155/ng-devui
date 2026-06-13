import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-datepicker-design',
  standalone: false,
  templateUrl: './datepicker-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DatepickerDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
