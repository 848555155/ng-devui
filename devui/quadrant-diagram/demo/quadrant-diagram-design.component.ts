import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-quadrant-diagram-design',
  standalone: false,
  templateUrl: './quadrant-diagram-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class QuadrantDiagramDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
