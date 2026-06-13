import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-search-design',
  standalone: false,
  templateUrl: './search-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SearchDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
