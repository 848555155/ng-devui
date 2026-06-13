import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-tree-select-design',
  standalone: false,
  templateUrl: './tree-select-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TreeSelectDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
