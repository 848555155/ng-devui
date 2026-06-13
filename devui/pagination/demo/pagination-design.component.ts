import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-pagination-design',
  templateUrl: './pagination-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PaginationDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
