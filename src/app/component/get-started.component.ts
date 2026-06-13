import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  DOCUMENT,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
import { marked } from 'marked';
import getStartedCn from './getStarted-cn.md?raw';
import getStartedEn from './getStarted-en.md?raw';

@Component({
  standalone: false,
  template: `
    <div dCodeCopy class="get-start">
      <div class="readme">
        <div [innerHTML]="readMe | safe : 'html'" #documentation></div>
      </div>
    </div>
  `,
  styles: `
      .readme {
        box-sizing: border-box;
        margin-bottom: 40px;
      }
    `,
  changeDetection: ChangeDetectionStrategy.Eager
})
export class GetStartedComponent implements OnInit, AfterViewInit {
  _readMe: HTMLElement;
  @Input() set readMe(readMe: any) {
    this._readMe = readMe.default || readMe;
    setTimeout(() => {
      this.refreshView();
    });
  }
  get readMe() {
    return this._readMe;
  }
  document: Document;
  @ViewChildren('documentation') documentation: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private translate: TranslateService, @Inject(DOCUMENT) private doc: any) {
    this.document = this.doc;
  }
  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    this.setReadMe(lang);
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.setReadMe(event.lang);
    });
  }

  setReadMe(lang) {
    const currLang = lang === 'en-us' ? 'en' : 'cn';
    this.readMe = marked.parse(currLang === 'en' ? getStartedEn : getStartedCn);
  }

  refreshView() {
    Array.from<HTMLElement>(this.document.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  ngAfterViewInit(): void {
    this.refreshView();
  }
}
