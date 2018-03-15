import { Component, OnInit } from '@angular/core';
import { FileTypeService } from '../file-type.service';

@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.css']
})
export class NavigationPaneComponent implements OnInit {
  urlType;

  constructor(private fileType: FileTypeService) {
    fileType.fileType$.subscribe(
      filetype => {
        this.urlType = filetype;
      }
    );
  }
  music() {
    let url = "audio";
    this.fileType.sendFileType(url);
  }
  images() {
    let url = "images";
    this.fileType.sendFileType(url);
  }
  video() {
    let url = "video";
    this.fileType.sendFileType(url);
  }
  allFiles() {
    let url = "allfiles";
    this.fileType.sendFileType(url);
  }
  ngOnInit() {
  }

}
