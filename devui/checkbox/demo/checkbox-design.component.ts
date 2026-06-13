import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-checkbox-design',
  standalone: false,
  templateUrl: './checkbox-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class CheckboxDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
