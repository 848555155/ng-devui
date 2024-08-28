import { Clipboard } from '@angular/cdk/clipboard';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  TemplateRef
} from '@angular/core';
import { I18nInterface, I18nService } from 'ng-devui/i18n';
import { OverlayContainerRef } from 'ng-devui/overlay-container';
import { PopoverComponent } from 'ng-devui/popover';
import { PositionType } from 'ng-devui/tooltip';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[dClipboard]',
  standalone: true
})
export class ClipboardDirective implements OnInit , OnDestroy {
  devuiTargetElm = input<HTMLInputElement | HTMLTextAreaElement | undefined | ''>(undefined, {
    alias: "dClipboard"
  });
  container = input<HTMLElement>();
  content = input<string>();
  position = input<PositionType>('top');
  sticky = input(false, {
    transform: coerceBooleanProperty
  });
  tipContent = input<string|HTMLElement| TemplateRef<any>>();
  copyResultEvent = output<any>();
  popoverComponentRef: ComponentRef<PopoverComponent>;
  i18nCommonText: I18nInterface['common'];
  i18nSubscription: Subscription;
  document = inject(DOCUMENT);

  private elm = inject(ElementRef);
  private clipboard = inject(Clipboard);
  private i18n = inject(I18nService);
  private overlayContainerRef = inject(OverlayContainerRef);
  private componentFactoryResolver = inject(ComponentFactoryResolver);

  ngOnInit(): void {
    this.setI18nText();
  }

  setI18nText() {
    this.i18nCommonText = this.i18n.getI18nText().common;
    this.i18nSubscription = this.i18n.langChange().subscribe((data) => {
      this.i18nCommonText = data.common;
    });
  }

  @HostListener('click')
  onClickEvent() {
    let isSucceeded = false;
    const isSupported = !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!window;
    if (isSupported && this.content()) {
      isSucceeded = this.clipboard.copy(this.content());
      if (isSucceeded) {
        const content = this.tipContent() || this.i18nCommonText.copied;
        this.createPopover(content);
      }
      const result = { isSupported: isSupported, isSucceeded: isSucceeded, content: this.content };
      this.copyResultEvent.emit(result);
    }
  }

  createPopover(content: string | HTMLElement | TemplateRef<any>) {
    if (this.popoverComponentRef) {
      this.popoverComponentRef.destroy();
    }
    this.popoverComponentRef = this.overlayContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(PopoverComponent)
    );
    Object.assign(this.popoverComponentRef.instance, {
      content: content,
      triggerElementRef: this.elm,
      position: this.position(),
      popType: 'default',
      popMaxWidth: 200,
      appendToBody: true,
      zIndex: 1060
    });
    this.document.addEventListener('click', this.onDocumentClick);
    if (!this.sticky()) {
      setTimeout(() => this.destroy(), 3000);
    }
  }

  destroy() {
    if (this.popoverComponentRef) {
      this.popoverComponentRef.destroy();
      this.popoverComponentRef = null;
    }
    this.document.removeEventListener('click', this.onDocumentClick);
  }

  onDocumentClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (!this.elm.nativeElement.contains(event.target)) {
      this.destroy();
    }
  };

  ngOnDestroy() {
    if (this.i18nSubscription) {
      this.i18nSubscription.unsubscribe();
    }
  }
}
