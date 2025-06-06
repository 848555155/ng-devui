import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui/form';

@Component({
    selector: 'd-form-demo-base',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css'],
    standalone: false
})
export class BasicComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Vertical;

  constructor() {
  }
  inputDemoConfig: any;
  textareaDemoConfig: any;
  selectDemoConfig: any;
  multipleSelectDemoConfig: any;
  multipleSelect2DemoConfig: any;
  radioDemoConfig: any;
  toggleDemoConfig: any;
  checkboxDemoConfig: any;
  singleDateDemoConfig: any;
  multiDateDemoConfig: any;
  inputDemoConfig2: any;
  selectDemoconfig2: any;
  multipleSelectDemoConfig3: any;
  singleDateDemoConfig2: any;

  input1: any;

  radio1: any;

  disabled: false;

  labelList = [{
    id: 1,
    label: 'Option1'
  },
  {
    id: 2,
    label: 'Option2'
  },
  {
    id: 3,
    label: 'Option3'
  }];

  addedLabelList = [];

  selectOptions = [{
    id: 1,
    label: 'Option1'
  },
  {
    id: 2,
    label: 'Option2'
  },
  {
    id: 3,
    label: 'Option3'
  }];

  radioOptions = [{
    id: 10,
    label: 'Manual execution'
  }, {
    id: 11,
    label: 'Daily execution'
  }, {
    id: 12,
    label: 'Weekly execution'
  }];

  checkboxOptions = [
    { 'id': '1', 'label': 'Mon', checked: true },
    { 'id': '2', 'label': 'Tue' },
    { 'id': '3', 'label': 'Wed' },
    { 'id': '4', 'label': 'Thur' },
    { 'id': '5', 'label': 'Fri' },
    { 'id': '6', 'label': 'Sat' },
    { 'id': '0', 'label': 'Sun' }
  ];

  formData = {
    inputValue: '',
    textareaValue: '',
    selectValue: this.selectOptions[1],
    multipleSelectValue: [this.selectOptions[1], this.selectOptions[2]],
    multipleSelect2Value: [this.selectOptions[1], this.selectOptions[2]],
    radioValue: {},
    toggleValue: false,
    singDateValue: '',
    multiDateValue: {
      startDate: '',
      endDate: ''
    },

    inputValue2: '',
    singDateValue2: '',
  };

  ngOnInit() {
    this.multipleSelect2DemoConfig = {
      key: 'multipleSelect-demo2',
      label: 'Options(Multiple selection with delete)',
      isSearch: true,
      multiple: 'true',
      labelization: { enable: true, labelMaxWidth: '120px' },
      options: this.selectOptions
    };
  }

  transferToTarget(data) {
    console.log(data);
  }

  transferToSource(data) {
    console.log(data);
  }

  onChange(event) {
    this.disabled = event;
  }
}
