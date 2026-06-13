import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JPGTESTIMG, JPGTESTIMG2 } from '../fakedata';
import { images } from '../image-mock';

@Component({
  selector: 'd-image-preview-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  images = images;

  imageDatas = [{ src: JPGTESTIMG }, { src: JPGTESTIMG2 }];
}
