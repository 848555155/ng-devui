import { Component } from '@angular/core';
import { ButtonComponent, ButtonGroupComponent } from 'ng-devui/button';
import { DropDownModule } from 'ng-devui/dropdown';

@Component({
  selector: 'd-button-groups',
    imports: [ButtonComponent, ButtonGroupComponent, DropDownModule],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent {}
