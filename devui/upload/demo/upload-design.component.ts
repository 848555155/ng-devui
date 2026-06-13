import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-upload-design',
  standalone: false,
  templateUrl: './upload-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class UploadDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
