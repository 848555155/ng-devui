import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-data-table-design',
  standalone: false,
  templateUrl: './data-table-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DataTableDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
