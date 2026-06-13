import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-dragdrop-design',
  standalone: false,
  templateUrl: './dragdrop-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DragdropDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
