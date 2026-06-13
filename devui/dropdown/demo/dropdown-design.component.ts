import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-dropdown-design',
  standalone: false,
  templateUrl: './dropdown-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DropdownDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
