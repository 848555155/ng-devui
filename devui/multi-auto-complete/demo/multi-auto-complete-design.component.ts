import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-multi-auto-complete-design',
  standalone: false,
  templateUrl: './multi-auto-complete-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiAutoCompleteDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
