import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-editable-select-design',
  standalone: false,
  templateUrl: './editable-select-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class EditableSelectDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
