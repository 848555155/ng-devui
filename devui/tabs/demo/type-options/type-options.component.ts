import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'd-type-options',
    templateUrl: './type-options.component.html',
    standalone: false
})
export class TypeOptionsComponent implements OnInit {
  tabActiveId: string | number = 'tab1';
  activeTabData;
  tabItems = [
    {
      id: 'tab1',
      title: 'Tab1',
      disabled: true,
      content: `Tab1 Content`,
    },
    {
      id: 'tab2',
      title: 'Tab2',
      content: `Tab2 Content`,
    },
    {
      id: 'tab3',
      title: 'Tab3',
      content: `Tab3 Content`,
    },
  ];

  ngOnInit(): void {
    this.activeTabData = this.tabItems[0];
    setTimeout(() => {
      this.tabActiveId = 'tab2';
    }, 100);
  }

  activeTabChange(tab: string): void {
    this.activeTabData = this.tabItems.filter((item) => item.id === tab)[0];
  }
}
