import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-tree-design',
  standalone: false,
  templateUrl: './tree-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TreeDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
