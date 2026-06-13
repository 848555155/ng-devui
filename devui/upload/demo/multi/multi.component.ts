import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IFileOptions, IUploadOptions } from 'ng-devui/upload';

@Component({
  selector: 'd-multi',
  standalone: false,
  templateUrl: './multi.component.html',
  styleUrl: './multi.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiComponent {
  additionalParameter2 = {
    name: 'tom',
    age: 11,
  };
  uploadOptions2: IUploadOptions = {
    uri: '/upload',
    method: 'post',
    additionalParameter: this.additionalParameter2,
    maximumSize: 20,
    checkSameName: true,
  };
  uploadOptions: IUploadOptions = {
    uri: '/upload',
    method: 'post',
    additionalParameter: this.additionalParameter2,
    maximumSize: 0.5,
    maximumCount: 3,
    checkSameName: true,
  };
  fileOptions2: IFileOptions = {
    multiple: true,
    accept: '.xls,.xlsx,.pages,.mp3,.png',
  };
  fileOptions3: IFileOptions = {
    multiple: true,
    webkitdirectory: true,
  };
  uploadOptions3: IUploadOptions = {
    uri: '/upload',
    method: 'post',
    maximumSize: 20,
    checkSameName: true,
  };
  uploadedFiles2: Array<object> = [];
  uploadedFiles3: Array<object> = [];
  UPLOADED: string;
  FAILED: string;
  DELETE: string;
  PRELOAD: string;
  UPLOADING: string;
  UPLOAD: string;

  constructor() {
    this.UPLOAD = '上传';
    this.PRELOAD = '预加载';
    this.UPLOADING = '上传中...';
    this.UPLOADED = '已上传';
    this.FAILED = '上传失败';
    this.DELETE = '删除';
  }

  onSuccess2(result) {
    console.log(result);
  }

  onError2(error) {
    console.log(error);
  }

  deleteUploadedFile2(filePath: string) {
    console.log(`delete ${filePath}`);
  }

  fileDrop(files) {
    console.log(files);
  }
  fileOver(event) {
    console.log(event);
  }
  fileSelect(files) {
    console.log(files);
  }
}
