import { contentChildren, Directive, effect, inject, input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AnchorDirective } from './anchor.directive';
import { AnchorService } from './anchor.service';
import { AnchorActiveChangeSource, IAnchorBox } from './anchor.type';

@Directive({
  selector: '[dAnchorBox]',
})
export class AnchorBoxDirective implements IAnchorBox, OnDestroy {
  public isScrollingToTarget = false;
  private activeChangeSubject = new Subject<AnchorDirective>();
  public activeChange = this.activeChangeSubject.asObservable();
  isInit = true;
  refreshAnchorMap: Subject<void> = new Subject<void>();
  anchorMap: { [anchor: string]: AnchorDirective };
  _anchorList: readonly AnchorDirective[];
  sub: Subscription;
  readonly view = input<{
    top?: number;
    bottom?: number;
  }>();
  readonly defaultAnchor = input<string>();
  readonly scrollTarget = input<HTMLElement>();
  private anchorService = inject(AnchorService);
  private readonly list = contentChildren(AnchorDirective, { descendants: true });
  set anchorList(list: readonly AnchorDirective[]) {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = new Subscription();
    this.anchorMap = {};
    this._anchorList = list;
    this.anchorService.anchorList = this._anchorList.map((item) => item.anchor());
    this._anchorList.forEach((targetAnchor) => {
      this.anchorMap[targetAnchor.anchor()] = targetAnchor;
      targetAnchor.setBoxElement(this);
      this.sub.add(
        targetAnchor.activeChangeSubject.pipe(filter((bool) => !!bool)).subscribe(() => {
          this.activeChangeSubject.next(targetAnchor);
        })
      );
    });
    this.refreshAnchorMap.next();
  }

  get anchorList() {
    return this._anchorList;
  }

  constructor() {
    effect(() => {
      const anchor = this.defaultAnchor();
      if (anchor) {
        this.forceActiveAnchor(anchor, 'initial');
      }
    });
    effect(() => {
      const list = this.list();
      this.anchorList = list;
    });
  }

  ngOnDestroy(): void {
    this.activeChangeSubject.complete();
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  forceActiveAnchor(anchorName: string, forceActiveSource: AnchorActiveChangeSource = 'scroll', deactivateOtherAnchor = true) {
    if (this.anchorMap && this.anchorService.anchorList.indexOf(anchorName) >= 0) {
      this.anchorMap[anchorName].activeChangeBy = forceActiveSource;
      this.anchorMap[anchorName].setIsActive(true);
      if (deactivateOtherAnchor) {
        Object.keys(this.anchorMap)
          .filter((name) => name !== anchorName)
          .map((name) => this.anchorMap[name])
          .forEach((anchor) => {
            anchor.activeChangeBy = forceActiveSource;
            anchor.setIsActive(false);
          });
      }
    }
  }
}
