import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import HighLight from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
HighLight.registerLanguage('xml', xml);
HighLight.registerLanguage('css', css);
HighLight.registerLanguage('typescript', typescript);

@Component({
  selector: 'd-highlight',
  standalone: false,
  template: ` <pre [ngClass]="'language-' + language"><code #codeEl [innerText]="code"></code></pre> `,
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class DevUIHighlightComponent implements OnInit, AfterViewInit {
  // response: HighlightResult;
  _code;
  @ViewChild('codeEl', { static: true }) codeElement: ElementRef;
  @Input() language: string;

  @Input()
  get code() {
    return this._code || '';
  }

  set code(value) {
    this._code = value;
  }

  ngAfterViewInit() {
    HighLight.highlightBlock(this.codeElement.nativeElement);
  }

  constructor() {}

  ngOnInit() {}
}
