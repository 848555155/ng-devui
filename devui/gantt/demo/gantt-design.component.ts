import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-gantt-design',
  standalone: false,
  templateUrl: './gantt-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class GanttDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
