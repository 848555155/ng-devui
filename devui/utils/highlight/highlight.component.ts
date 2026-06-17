import {
  Component,
  ElementRef,
  DOCUMENT,
  inject,
  effect,
  input,
} from '@angular/core';

@Component({
  selector: 'd-highlight',
  template: ``,
  styleUrl: './highlight.component.scss',
  host: {
    'style.display': 'inline',
  }
})
export class HighlightComponent {
  readonly value = input<string>();
  readonly term = input<string>();
  document = inject(DOCUMENT);

  private eleRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      const value = this.value();
      const term = this.term();
      this.addDom(value, term);
    });
  }

  addDom(value: string, term: string) {
    if (value && term) {
      this.highlight(value, term);
    } else {
      const container = this.eleRef.nativeElement;
      this.emptyChildren(container);
      container.textContent = value;
    }
  }
  emptyChildren(container: HTMLElement) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
  }

  highlight(value: string, term: string) {
    const container = this.eleRef.nativeElement;
    this.emptyChildren(container);
    const reg = (str: string) => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regExp = new RegExp('(' + reg(term) + ')', 'gi');
    const temp = value.split(regExp);
    const createHighLight = (text: string) => {
      const spanDOM = this.document.createElement('span');
      spanDOM.classList.add('devui-match-highlight');
      spanDOM.textContent = text;
      return spanDOM;
    };

    temp.forEach((element, index) => {
      if (index % 2 === 0) {
        container.appendChild(this.document.createTextNode(element));
      } else {
        container.appendChild(createHighLight(element));
      }
    });
  }
}
