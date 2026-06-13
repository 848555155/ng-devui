import { Component, Inject, OnInit, DOCUMENT, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-scroll-target',
  standalone: false,
  templateUrl: './scroll-target.component.html',
  styleUrl: './scroll-target.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ScrollTargetComponent implements OnInit {
  stickyView = {
    top: 10,
    bottom: 0,
  };
  demoDocViewerMain;
  constructor(@Inject(DOCUMENT) private doc: any) {}

  ngOnInit() {
    this.demoDocViewerMain = this.doc.querySelector('.doc-viewer-container .main');
  }
}
