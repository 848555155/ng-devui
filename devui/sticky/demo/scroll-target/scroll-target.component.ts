import { Component, Inject, OnInit, DOCUMENT, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-scroll-target',
  templateUrl: './scroll-target.component.html',
  styleUrls: ['./scroll-target.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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
