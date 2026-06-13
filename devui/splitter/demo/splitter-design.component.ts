import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-splitter-design',
  standalone: false,
  templateUrl: './splitter-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
