import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-image-preview-design',
  standalone: false,
  templateUrl: './image-preview-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ImagePreviewDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
