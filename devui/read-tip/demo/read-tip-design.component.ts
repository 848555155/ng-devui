import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-read-tip-design',
  standalone: false,
  templateUrl: './read-tip-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ReadTipDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
