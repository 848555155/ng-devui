import { InputSignal } from "@angular/core";

export interface IAnchorBox {
  isScrollingToTarget: boolean;
  scrollTarget: InputSignal<Element | Window>;
  defaultAnchor: InputSignal<string>;
  forceActiveAnchor: Function;
  view: InputSignal<{
    top?: number;
    bottom?: number;
  }>;
}
export type AnchorActiveChangeSource = 'anchor-link' | 'scroll' | 'click-inside' | 'initial' | 'fragment';
