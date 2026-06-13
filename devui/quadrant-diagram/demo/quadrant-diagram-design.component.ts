import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-quadrant-diagram-design',
  templateUrl: './quadrant-diagram-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class QuadrantDiagramDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
