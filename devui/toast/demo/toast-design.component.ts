import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-toast-design',
  standalone: false,
  templateUrl: './toast-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ToastDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
