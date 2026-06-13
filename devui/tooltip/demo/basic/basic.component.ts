import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent implements OnInit {
  message = 'Upload a file in sh,js,ts,java,css,html,xml.aql,rb,py,php,c,cpp,txt format.';
  position: 'left';

  constructor() {}

  ngOnInit() {}
}
