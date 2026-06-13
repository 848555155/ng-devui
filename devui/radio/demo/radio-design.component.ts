import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-radio-design',
  standalone: false,
  templateUrl: './radio-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class RadioDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
