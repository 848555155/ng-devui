import { Component, Inject, OnInit, DOCUMENT, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent implements OnInit {
  stickyView = {
    top: 160,
    bottom: 0,
  };
  demoDocViewerMain;
  constructor(@Inject(DOCUMENT) private doc: any) {}

  ngOnInit() {
    this.demoDocViewerMain = this.doc.querySelector('.doc-viewer-container .main');
  }
  log(...v) {
    console.log(...v);
  }
}
