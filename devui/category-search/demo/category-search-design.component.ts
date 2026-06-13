import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-category-search-design',
  standalone: false,
  templateUrl: './category-search-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CategorySearchDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
