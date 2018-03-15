import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FileTypeService {
  private recievedFileType = new Subject<string>();
  private sentFileType = new Subject<string>();

  fileType$ = this.recievedFileType.asObservable();
  sentFileType$ = this.sentFileType.asObservable();

  sendFileType(filetype: string) {
    this.sentFileType.next(filetype);
  }
  receiveFileType(filetype: string) {
    this.recievedFileType.next(filetype);
  }
  constructor() { }

}
