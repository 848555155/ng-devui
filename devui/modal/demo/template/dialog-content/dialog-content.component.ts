import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalComponent } from 'ng-devui/modal';
@Component({
  selector: 'd-dialog-content',
  standalone: false,
  templateUrl: './dialog-content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DialogContentComponent implements OnInit {
  @Input() data: any;
  @Input() modalInstance: ModalComponent;
  @Input() modalContentInstance;

  ngOnInit(): void {
    console.log('modalInstance', this.modalInstance);
    console.log('modalContentInstance', this.modalContentInstance);
  }
}
