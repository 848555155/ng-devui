import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-mention-design',
  standalone: false,
  templateUrl: './mention-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MentionDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
