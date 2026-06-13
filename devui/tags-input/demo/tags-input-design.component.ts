import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-tags-input-design',
  standalone: false,
  templateUrl: './tags-input-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TagsInputDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
