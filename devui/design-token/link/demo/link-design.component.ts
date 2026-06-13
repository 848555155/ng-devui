import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-link-design',
  standalone: false,
  templateUrl: './link-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LinkDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
