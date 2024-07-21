import { Injectable } from '@angular/core';
import { DragSyncDirective } from '../directives/drag-sync.directive';
import { DropSortSyncDirective } from '../directives/drop-sort-sync.directive';
import { DescendantRegisterService } from './drag-drop-desc-reg.service';

@Injectable({
  providedIn: 'root'
})
export class DragSyncDescendantRegisterService extends DescendantRegisterService<DragSyncDirective> {}
@Injectable({
  providedIn: 'root'
})
export class DropSortSyncDescendantRegisterService extends DescendantRegisterService<DropSortSyncDirective> {}
