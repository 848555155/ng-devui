import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-tabs-design',
  standalone: false,
  templateUrl: './tabs-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TabsDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
