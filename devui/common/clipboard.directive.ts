import { Clipboard } from '@angular/cdk/clipboard';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  TemplateRef,
  DOCUMENT,
  inject,
  output,
  input,
  booleanAttribute,
  model,
} from '@angular/core';
import { I18nInterface, I18nService } from 'ng-devui/i18n';
import { OverlayContainerRef } from 'ng-devui/overlay-container';
import { PopoverComponent } from 'ng-devui/popover';
import { PositionType } from 'ng-devui/tooltip';
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Directive({
  selector: '[dClipboard]',
})
export class ClipboardDirective implements OnDestroy {
  readonly devuiTargetElm = input.required<HTMLInputElement | HTMLTextAreaElement | undefined | ''>({ alias: 'dClipboard' });
  readonly content = input<string>();
  readonly position = input<PositionType>('top');
  readonly sticky = input(false, { transform: booleanAttribute });
  readonly tipContent = model<string | HTMLElement | TemplateRef<any>>();
  copyResultEvent = output<any>();
  popoverComponentRef: ComponentRef<PopoverComponent>;

  private elm = inject(ElementRef);
  private clipboard = inject(Clipboard);
  private i18n = inject(I18nService);
  private overlayContainerRef = inject(OverlayContainerRef);
  document = inject(DOCUMENT);
  i18nCommonText: I18nInterface['common'] = this.i18n.getI18nText().common;
  i18nSubscription = this.i18n.langChange().subscribe((data) => {
    this.i18nCommonText = data.common;
  });
  destoryPopver = new Subject<void>();

  @HostListener('click')
  onClickEvent() {
    let isSucceeded = false;
    const content = this.content();
    if (content) {
      isSucceeded = this.clipboard.copy(content);
      if (isSucceeded) {
        this.tipContent.set(this.tipContent() || this.i18nCommonText.copied);
        this.createPopover();
      }
      const result = { isSupported: true, isSucceeded, content };
      this.copyResultEvent.emit(result);
    }
  }

  createPopover() {
    if (this.popoverComponentRef) {
      this.popoverComponentRef.destroy();
    }
    this.popoverComponentRef = this.overlayContainerRef.createComponent(PopoverComponent);
    this.popoverComponentRef.setInput('content', this.tipContent());
    this.popoverComponentRef.setInput('triggerElementRef', this.elm);
    this.popoverComponentRef.setInput('position', this.position());
    this.popoverComponentRef.setInput('popType', 'default');
    this.popoverComponentRef.setInput('popMaxWidth', 200);
    this.popoverComponentRef.setInput('appendToBody', true);
    this.popoverComponentRef.setInput('zIndex', 1060);
    fromEvent(this.document, 'click')
      .pipe(takeUntil(this.destoryPopver))
      .subscribe({
        next: (event) => {
          this.onDocumentClick(event);
        },
        complete: () => {
          if (this.popoverComponentRef) {
            this.popoverComponentRef.destroy();
            this.popoverComponentRef = null;
          }
        },
      });
    if (!this.sticky()) {
      setTimeout(() => this.destoryPopver.next(), 3000);
    }
  }

  onDocumentClick = (event: Event) => {
    event.stopPropagation();
    if (!this.elm.nativeElement.contains(event.target)) {
      this.destoryPopver.next();
    }
  };

  ngOnDestroy() {
    this.destoryPopver.next();
  }
}
