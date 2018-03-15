import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { File } from '../file';
import { FileService } from '../file.service';
import { FileTypeService } from '../file-type.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  files: File[];
  fileUrl;
  subscription: Subscription;
  constructor(private fileService: FileService, private fileTypeService: FileTypeService) {
    this.subscription = fileTypeService.sentFileType$.subscribe(
      fileurl => {
        this.fileUrl = fileurl;
        this.getFiles();
        console.log('fileComponenet response:' + fileurl);
      }
    );
  }

  getFiles(): void {
    this.fileService.getFiles(this.fileUrl).subscribe(files => this.files = files);
  }
  download(): void {
    
  }
  ngOnInit() {  }

}
