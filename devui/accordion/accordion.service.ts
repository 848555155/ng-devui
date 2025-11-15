import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccordionListComponent } from './accordion-list.component';
import { AccordionMenuItem } from './accordion.type';

@Injectable({ providedIn: 'root' })
export class AccordionService {
  childListSubject = new ReplaySubject<{ listInstance: AccordionListComponent; parent: AccordionMenuItem }>(1);
  childListObs = this.childListSubject.asObservable();

  setChildListInstance(listInstance: AccordionListComponent, parent: AccordionMenuItem) {
    this.childListSubject.next({ listInstance, parent });
  }

  getChildListInstance() {
    return this.childListObs;
  }
}
